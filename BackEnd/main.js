const express = require("express")
const cors = require("cors")
const { validEmail, validPassword, validMobile } = require('./src/validations/userValidation');
const collection = require("./src/models/userModel")
const contactModel = require("./src/models/contactModel")
//const cUser=require("./src/models/cUserModel")
const app = express()
const fs = require('fs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {

})

app.post("/create", async (req, res) => {
    try {
        const user = req.body
        const { email, password, mobile } = user;

        const data = {
            email: email,
            password: password,
            mobile: mobile
        }
        if (!email || !password || !mobile) {
            console.log("Please provide all information !")
            return res.status(500).send({ message: "Not enough info" })
        }
        let valEmail = validEmail(email);
        if (!valEmail) {
            console.log("please enter valid email: ")
            return res.status(500).send({ message: "invalid id" })
        }
        let valPass = validPassword(password);
        if (!valPass) {
            console.log("please enter valid password: ")
            return res.status(500).send({ message: "invalid pass" })
        }
        let valMob = validMobile(mobile);
        if (!valMob) {
            console.log("please enter valid mobile number: ")
            return res.status(500).send({ message: "invalid phone" })
        }
        //unique validation
        let uniqueEmail = await collection.findOne({ email })
        if (uniqueEmail) {
            console.log('mail exists')
            return res.status(500).send({ message: "Email already exists!" })
        }
        let uniquePhone = await collection.findOne({ mobile })
        if (uniquePhone) {
            console.log('phone exists')
            return res.status(500).send({ message: "Phone already exists!" })
        }
        let createUs = await collection.create(data)
        console.log(createUs)
        return res.status(200).send({ message: "Success" })
        // navigate('/login') work needed
    } catch (error) {
        console.log(error)
    }
})

app.post("/delete", async (req, res) => {
    try {
        const user = req.body
        const { email, password } = user;

        const data = {
            email: email,
            password: password
        }
        let uniqueEmail = await collection.findOne({ email })
        if (!uniqueEmail) {
            console.log('invalid email')
        }
        await collection.deleteMany(data)
    } catch (error) {
        console.log(error)
    }
})

app.get("/getall", async (req, res) => {
    try {
        // const user=req.body
        // const {email,password,/*fname,lname,*/mobile}=user;
        let userDetails = await collection.find()
        console.log(userDetails)
    } catch (error) {
        console.log(error)
    }
})
app.post("/login", async (req, res) => {
    try {
        const user = req.body
        const { email, password } = user;
        if (!email || !password) {
            console.log("Please provide all information !")
            return res.status(500).send({ message: "Not enough info" })
        }
        const loginTime = new Date().toISOString();
        let matchStudent = await collection.findOne({ email, password })
        console.log(matchStudent)
        if (!matchStudent) {
            return res.status(500).send({ message: "User not Registered" })//200 is the error code for "Working".
        }
        const logEntry = `Login:${loginTime} User:${email}\n`;
        fs.appendFile('log.txt', logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
                res.status(500).send({ message: "Error logging in." });
            } else {
                console.log('Logged in:', email);
                console.log('Success login');
                return res.status(200).send({ message: "Login Successful" })
            }
        });

    } catch (error) {
        console.log(error)
    }
});
app.get("/validAuth",async (req,res)=>{
    const data = fs.readFileSync('log.txt', 'utf8');
    console.log(data);
    return data
})
app.post("/logout",async (req,res)=>{
    try {
        fs.writeFileSync('log.txt','');
        var data = fs.readFileSync('log.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error)
    }
})
app.post("/contactus", async (req, res) => {
    try {
        const contact = req.body;
        const { name, email, subject, message } = contact;
        if (!name || !email || !subject || !message) {
            res.status(500).send({ message: "Please provide all information !" });
            return
        }
        let valEmail = validEmail(email);
        if (!valEmail) {
            return res.status(500).send({ message: "please enter valid email: " });
        }
        let createContact = await contactModel.create(contact);
        res.send({ message: createContact });
        const loginTime = new Date().toISOString();
        const logEntry = `${loginTime}\nUser: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n\n`;
        fs.appendFile('feedback.txt', logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
                res.status(500).send('Error logging in.');
            } else {
                console.log('Feedback taken:', email);
                console.log(createContact)
                return res.status(200)
            }
        });

    } catch (err) {
        console.log(err);
    }
});
app.listen(8080, () => {
    console.log("port connected")
})