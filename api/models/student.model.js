const mongoose=require('mongoose')



const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    className:{
        type:Number,
        required:true
    },
    address:{
        type:String
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    admittedOn:{
        type:Date,
        default:Date.now()
    }
})


module.exports=mongoose.model('student',StudentSchema)

