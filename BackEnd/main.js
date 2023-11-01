const express=require("express")
const cors=require("cors")
const { validEmail, validPassword, validMobile } = require('./src/validations/userValidation');
const collection=require("./src/models/userModel")
const cUser=require("./src/models/cUserModel")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/create",async(req,res)=>{
    try {
        const user=req.body
        const {email,password,mobile}=user;
        
        const data={
            email:email,
            password:password,
            mobile:mobile
        }
        if (!email || !password || !mobile){
            console.log("Please provide all information !")
            return res.send({message : "Not enough info"})
        }
        let valEmail = validEmail(email);
        if (!valEmail) {
            console.log("please enter valid email: ")
            return res.send({message : "invalid id"})
        }
        let valPass = validPassword(password);
        if (!valPass) {
            console.log("please enter valid password: ")
            return res.send({message : "invalid pass"})
        }
        let valMob = validMobile(mobile);
        if (!valMob) {
            console.log("please enter valid mobile number: ")
            return res.send({message : "invalid phone"})
        }
        //unique validation
        let uniqueEmail = await collection.findOne({email})
        if (uniqueEmail) {
            console.log('mail exists')
            return res.send({message : "Email already exists!"})
        }
        let uniquePhone = await collection.findOne({mobile})
        if (uniquePhone) {
            console.log('phone exists')
            return res.send({message : "Phone already exists!"})
        }
        let createUs = await collection.create(data)
        console.log(createUs)
       // navigate('/login') work needed
    } catch (error) {
        console.log(error)
    }
})

app.post("/delete",async(req,res)=>{
    try {
        const user=req.body
        const {email,password}=user;
        
        const data={
            email:email,
            password:password
        }
        let uniqueEmail = await collection.findOne({email})
        if (!uniqueEmail) {
            console.log('invalid email')
        }
        await collection.deleteMany(data)
    } catch (error) {
        console.log(error)
    }
})

app.get("/getall",async(req,res)=>{
    try {
        // const user=req.body
        // const {email,password,/*fname,lname,*/mobile}=user;
        let userDetails = await collection.find()
        console.log(userDetails)
    } catch (error) {
        console.log(error)
    }
})
app.post("/currentUser",async(req,res)=>{
    try {
        const user=req.body
        const {email,password}=user;
        const data={
            email:email,
            password:password
        }
        let uniqueEmail = await cUser.create(data)
        if (!uniqueEmail) {
            console.log('invalid credentials');
            // alert("Wrong username or password")
            return res.send({message : "Login error"})
        }
        console.log('Success login')
    } catch (e) {
        console.log(e)
    }
})
app.get("/login",async(req,res)=>{
    try {
        const user=req.body
        const {email,password}=user;
        
        const data={
            email:email,
            password:password
        }
        let uniqueEmail = await collection.findById({email,password})
        if (!uniqueEmail) {
            console.log('invalid credentials');
            // alert("Wrong username or password")
            return res.send({message : "Login error"})
        }
        console.log('Success login')
    } catch (error) {
        console.log(error)
    }
})

app.listen(8080,()=>{
    console.log("port connected")
})