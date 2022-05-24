const express=require('express')
var bodyParser = require('body-parser')
const bcrypt=require('bcrypt')
require('dotenv').config()

const app=express()
const port=process.env.PORT || 80;

app.use('/files', express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",myLogger,(req,res)=>{
    res.sendFile(__dirname+"/public/")
})


app.post("/",(req,res)=>{
    const {username}=req.body

    var db="$2b$10$2vrI8uHCvQAb7qVnNLSM.OzqU38MxVTNpwe6hI0IrN0fSpBkwP3WS"

    bcrypt.compare(username,db,(err,valid)=>{
        if(err) return res.send(err.message)
        if(valid) return res.send("Valid")
        res.send("Invalid")
})


    // hashing
    // bcrypt.hash(username,10,(err,hash)=>{
    //     if(err) return res.send(err.message)
    //     res.send(hash)
    // })

   
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


function myLogger(req, res, next) {
    console.log('LOGGED')
    next()
  }

// $2b$10$2vrI8uHCvQAb7qVnNLSM.OzqU38MxVTNpwe6hI0IrN0fSpBkwP3WS

// $2b$10$pcyZECpTCGG9o3bSB0eO8en392MYtFdiZUBUFHbzKJGooTnJFr9NW