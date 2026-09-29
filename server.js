const express=require("express")
const mongoose=require("mongoose")
const {student}=require("./model/studentModel.js")
const {getm,posto,postm,geto,studentById,puto,putm, deleteById, deletem}=require("./controller/studentController.js")
const { Router } = require("./routes/studentRouter.js")
const {configdb}=require("./config/db.js")
const app=express()
app.use(express.json())

app.use("/ma",Router)

app.listen(4000,()=>{
    console.log("server is running at http://localhost:4000")
})
//console.log("meghana")

