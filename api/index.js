const express = require('express');
const mongoose=require('mongoose')
require('dotenv').config()


// properties
const app = express();
const {DB_USER,DB_PASS,PORT}=process.env
const port = PORT || 8000;

// middlewares
app.use(express.json());


// connection db
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.8uylhrq.mongodb.net/api?retryWrites=true&w=majority`,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})


// routes
app.use("/api/student/",require("./routes/student.routes"))


// wrong route
app.get('*', (req, res) => {
    res.send("wrong");
});


// server
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

if([]){
    console.log('j')
}