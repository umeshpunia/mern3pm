const express=require('express')
const StudentSchema=require('../models/student.model')

const router=express.Router();


// all students
router.get("/",(req,res)=>{
    StudentSchema.find({},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(503).json({msg:"something wrong"});
        if(data.length > 0) return res.status(200).json({msg:data})
        res.status(200).json({msg:"Not Data In Db"})
    })
})

// single student
router.get("/:id",(req,res)=>{

    // console.log(req.params)
    const {id}=req.params;


    StudentSchema.findOne({_id:id},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(503).json({msg:"something wrong"});
        res.status(200).json({msg:data})
    })
})

// delete student
router.delete("/:id",(req,res)=>{

    // console.log(req.params)
    const {id}=req.params;


    StudentSchema.findByIdAndDelete({_id:id},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(503).json({msg:"something wrong"});
        res.status(200).json({msg:"Deleted Successfully"})
    })
})


// update
router.put("/:id",(req,res)=>{

    // console.log(req.params)
    const {id}=req.params;
    const {name,className,address,phone}=req.body;

    if(!name || !className || !phone || !address){
        return res.status(400).json({msg:"please fill all the fields"})
    }


    StudentSchema.findByIdAndUpdate({_id:id},{name,className,address,phone},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message});
        if(!data) return res.status(503).json({msg:"something wrong"});
        res.status(200).json({msg:"Updated Successfully"})
    })
})

// add student
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
