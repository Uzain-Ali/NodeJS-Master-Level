    const express = require("express");
    const users =require("./MOCK_DATA.json");
    const fs = require("fs")
    const app = express();
    const PORT = 5000;

    app.use(express.urlencoded({extended:false}))



    app.use((req, res, next)=>{
        fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path}`, (err,data)=>{
            next();

        });
    })

    //Routes

    app.get("/users",(req,res)=>{
        const html = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
        `
        res.send(html);
    });

    app.get("/api/users",(req,res)=>{
        return res.json(users);
    });

    app
        .route("/api/users/:id")
        .get((req,res)=>{
            const id=Number(req.params.id);
            const user = users.find((user)=>user.id === id);
            return res.json(user);
        })
        .patch((req,res)=>{
            const id = Number(req.params.id);
            const {first_name, last_name, email, gender, job_title} = req.body;

            const userIndex = users.findIndex((user) => user.id === id);

            if(userIndex ===-1){
                return res.status(404).json({ error: "User not found" });
            }

            if(first_name) users[userIndex].first_name = first_name;
            if(last_name) users[userIndex].last_name = last_name;
            if(email) users[userIndex].email = email;
            if(gender) users[userIndex].gender = gender;
            if(job_title) users[userIndex].job_title = job_title;

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
                if(err) return res.json({status: "unable to update data"})
                return res.json({status: "Data Updated", id: users[userIndex]})
            })

        })
        .delete((req,res)=>{
            const id = Number(req.params.id);
            const userIndex = users.findIndex((user) => user.id === id);

            if(userIndex === -1) return res.json({status:"Invalid Index"})

            const deletedUser = users.splice(userIndex, 1)[0];

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (error) => {
                if (error) {
                  // If there is an error writing to the file, add the deleted user back to the array
                  users.splice(userIndex, 0, deletedUser);
                  return res.status(500).json({ error: "Unable to delete user" });
                }
                return res.json({ status: "success", deletedUser });
            })
        });

    app.post("/api/users",(req,res)=>{
        const body = req.body;
        users.push({...body, id: users.length + 1 });
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error,data)=>{
            return res.json({status: "success", id: users.length})
        })
        
    })


    app.listen(PORT,()=>{
        console.log(`Server Running at PORT:${PORT}`)
    })
