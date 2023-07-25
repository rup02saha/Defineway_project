const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./UserModel");


//const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://debrupsaha2002:Debrup02@cluster0.mhqqfum.mongodb.net/?retryWrites=true&w=majority";

const params={
    useNewUrlParser:true,
    useUnifiedTopology:true
}



const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(uri,params)
     .then(()=>{
        console.info("Connected to the DB");
     })
     .catch((e)=>{
        console.log("Error:",e);
     })



app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.post('/login',(req,res)=>{
    
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password)
            {
                res.json({name:user.name,flag:0,message:"Success"})
            }
            else
            {
                res.json({flag:1,message:"Password is Incorrect"})
            }
        }
        else
        {
            res.json({flag:2,message:"User does'nt exist"});
        }
    })
    .catch(err=>res.json(err))
})



app.listen(5000,()=>{
    console.log("server is running")
})