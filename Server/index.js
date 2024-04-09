const http = require('http');
const express = require('express');
const app = express();

app.get("/",(req, res)=>{
    return res.send("Hello from homepage")
})
app.get("/about",(req, res)=>{
    return res.send(`Hello ${req.query.name}`)
})



app.listen(8000,()=>{
    console.log("Server Running...")
});