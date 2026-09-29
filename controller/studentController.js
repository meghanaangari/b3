const {student}=require("../model/studentModel")
const getm=async(req,res)=>{
    const s=await student.find()
    await res.send(s)
}

const posto=(req,res)=>{
    const s=student.insertOne(req.body)
    res.send("student is created")
}

const postm=async(req,res)=>{
    const s=await student.insertMany(req.body)
    await res.send(s)
}

const geto=async(req,res)=>{
    const s=await student.find(req.body)
    await res.send(s)
}

const studentById=async(req,res)=>{
    const s=await student.find({_id:req.params.id})
    await res.send(s)
}

const puto=async(req,res)=>{
    const s=await student.updateOne({name:req.body.name},{$set:{marks:req.body.marks}})
    await res.send(s)
}

const putm=async(req,res)=>{
    const s=await student.updateMany({course:req.body.course},{$set:{gender:req.body.gender}})
    await res.send(s)
}

const deleteById=async(req,res)=>{
    const s=await student.deleteOne({_id:req.params.id})
    await res.send(s)
}


const deletem=async(req,res)=>{
    const s= await student.deleteMany(req.body)
    await res.send(s)
}
module.exports={getm,posto,postm,geto,studentById,puto,putm,deleteById,deletem}