const express = require("express");
const userRouter = require("./routes/user")
const { connectMongoDb } = require("./connection");
const {logReqRes} = require("./middlewares")

const app = express();
const PORT = 5000;

connectMongoDb('mongodb://127.0.0.1:27017/Application1').then(()=>console.log("MongoDB Connected"));

app.use(express.urlencoded({ extended: false }))
app.use(logReqRes('log.txt'))

app.use("/api/users", userRouter);


app.listen(PORT, () => {
    console.log(`Server Running at PORT:${PORT}`)
})
