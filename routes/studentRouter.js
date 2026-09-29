const {getm, posto, postm, geto, studentById, puto, putm, deleteById, deletem}=require("../controller/studentController")
const express=require("express")
const Router=express.Router()
Router.post("/posto",posto)
Router.post("/postm",postm)
Router.get("/getm",getm)
Router.get("/geto",geto) 
Router.get("/get/:id",studentById)
Router.put("/puto",puto)
Router.put("/putm",putm)
Router.delete("/delete/:id",deleteById)
Router.delete("/deletem",deletem)

module.exports={Router}