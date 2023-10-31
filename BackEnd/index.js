const express = require('express')
const app = express()
const mongoose = require('mongoose');
//const route = require('./src/routes/routes')
app.use(express.json());
const cors=require("cors")
app.use(express.urlencoded({extended:true}))
app.use(cors())
const userModel = require('./src/models/userModel')


const PORT = 8080

//app.use('/',route);

app.get("/",cors(),(req,res)=>{

})

app.post("/",async (req,res) => {
    const user=req.body;
    const {email}=user;
    const data={
        email:email
        // password:password,
        // mobile:mobile
    }
    await userModel.insertMany([data])
})


app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
});