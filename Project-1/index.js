    const express = require("express");
    const users =require("./MOCK_DATA.json");
    const fs = require("fs")
    const mongoose = require('mongoose');
const { type } = require("os");

    const app = express();
    const PORT = 5000;

    mongoose.connect('mongodb://127.0.0.1:27017/Application1')
    .then(()=>console.log("Database Connected"))
    .catch(err => console.log("Error: ",err));

    const userSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required: true,
        },
        lastName:{
            type:String,
            required: false,
        },
        email:{
            type:String,
            required: true,
            unique:true,
        },
        gender:{
            type:String,
        },
        jobTitle:{
            type:String,
        },
    },{
        timestamps:true
    }
);

    const User = mongoose.model('user', userSchema);


    app.use(express.urlencoded({extended:false}))



    app.use((req, res, next)=>{
        fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path}`, (err,data)=>{
            next();

        });
    })

    //Routes

    app.get("/users",async(req,res)=>{
        const allUsers = await User.find({})
        const html = `
        <ul>
            ${allUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}
        </ul>
        `
        res.send(html);
    });

    app.get("/api/users",async(req,res)=>{
        const allUsers = await User.find({})
        res.setHeader("X-myName", "uzain");
        return res.json(allUsers);
    });

    app
        .route("/api/users/:id")
        .get(async(req,res)=>{
            const user = await User.findById(req.params.id)
            if(!user) return res.status(404).json({result: "Not Found"});
            return res.json(user);
        })
        .patch(async(req,res)=>{
            await User.findByIdAndUpdate(req.params.id, {lastName : "siddiqui"});
            return res.status(200).json({msg: "Updated"})
            // const id = Number(req.params.id);
            // const {first_name, last_name, email, gender, job_title} = req.body;

            // const userIndex = users.findIndex((user) => user.id === id);

            // if(userIndex ===-1){
            //     return res.status(404).json({ error: "User not found" });
            // }

            // if(first_name) users[userIndex].first_name = first_name;
            // if(last_name) users[userIndex].last_name = last_name;
            // if(email) users[userIndex].email = email;
            // if(gender) users[userIndex].gender = gender;
            // if(job_title) users[userIndex].job_title = job_title;

            // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
            //     if(err) return res.json({status: "unable to update data"})
            //     return res.json({status: "Data Updated", id: users[userIndex]})
            // })

        })
        .delete(async(req,res)=>{
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json({msg: "Deleted"});
            // const id = Number(req.params.id);
            // const userIndex = users.findIndex((user) => user.id === id);

            // if(userIndex === -1) return res.json({status:"Invalid Index"})

            // const deletedUser = users.splice(userIndex, 1)[0];

            // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (error) => {
            //     if (error) {
            //       // If there is an error writing to the file, add the deleted user back to the array
            //       users.splice(userIndex, 0, deletedUser);
            //       return res.status(500).json({ error: "Unable to delete user" });
            //     }
            //     return res.json({ status: "success", deletedUser });
            // })
        });

    app.post("/api/users",async(req,res)=>{
        const body = req.body;
        if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({msg: "All fields are required"})
        }

        const result = await User.create({
            firstName:body.first_name,
            lastName:body.last_name,
            email:body.email,
            gender:body.gender,
            jobTitle:body.job_title
        });
        return res.status(201).json({msg: "Success"});
    })


    app.listen(PORT,()=>{
        console.log(`Server Running at PORT:${PORT}`)
    })
