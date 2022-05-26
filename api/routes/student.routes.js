const express=require('express')
const StudentSchema=require('../models/student.model')

const router=express.Router();

router.get("/",(req,res)=>{
    StudentSchema.find({},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(503).json({msg:"something wrong"});
        if(data.length > 0) return res.status(200).json({msg:data})
        res.status(200).json({msg:"Not Data In Db"})
    })
})


router.post("/",(req,res)=>{
    const {name,className,address,phone}=req.body;

    if(!name || !className || !phone || !address){
        return res.status(400).json({msg:"please fill all the fields"})
    }


    let insStudent=new StudentSchema({name,className,address,phone})

    insStudent.save((err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(404).json({msg:"not inserted"});
        res.status(200).json({msg:"success"})
    })
})





module.exports=router;
