const express = require("express");
const urlRoute = require("../SHORT-URL-PROJECT/routes/url")
const { connectMongDb } = require("./connection");
const URL = require("../SHORT-URL-PROJECT/models/url")

const app = express();
const PORT = 8000;

connectMongDb("mongodb://localhost:27017/shortURL")
.then(()=>console.log("MongoDB Conected..."));

app.use(express.json());
app.use('/url', urlRoute);

app.get("/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
        },
        {
            $push:
            {
                visitHistory: {
               timestamp: Date.now(),
            }
            },
        }   
);
    res.redirect(entry.redirectURL);
});

app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is Running...`)
});