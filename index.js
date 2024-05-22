const express=require("express");
const { connection } = require("./db");
const { UserRouter } = require("./Routes/Userroute");
var cors = require('cors');
const { TodoRouter } = require("./Routes/TodoRouter");
const { Auth } = require("./Middleware/Auth");
const app=express();

app.use(express.json());
app.use(cors());

app.use("/user",UserRouter);

app.use(Auth);

app.use("/todo",TodoRouter);


app.get("/",(req,res)=>{
    res.send("Home page");
});

app.listen(8080,async(req,res)=>{
    try {
        console.log("connecting...");
        await connection;
        console.log("connected");
    } catch (error) {
        console.log(error.message);
        res.send({"msg":error.message});
    }
});