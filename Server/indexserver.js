const express= require("express")
const app=express()
const userRoutes=require("../Server/routes/userRoutes")
const cors =require("cors")
require("dotenv").config()

const dbconfig=require("./config/dbconfig")
app.use(express.json())


app.use(cors())
app.use("/user",userRoutes)


app.get("/",(req,res)=>{
    res.send("Hi Iam Suresh")
})

app.listen(7676,()=>{
    console.log("Working on port 7676");
})
