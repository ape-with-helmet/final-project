const express = require("express")
const cors = require("cors")
const { validEmail, validPassword, validMobile } = require('./src/validations/userValidation');
const collection = require("./src/models/userModel")
const contactModel = require("./src/models/contactModel")
const cartModel = require("./src/models/cartModel")
const pData = require("./src/models/productModel")
const app = express()
const fs = require('fs');
const { send } = require("process");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {

});

app.post("/create", async (req, res) => {
    try {
        const user = req.body
        const { email, password, mobile, username, admin } = user;

        const data = {
            email: email,
            password: password,
            mobile: mobile,
            username: username,
            admin: admin
        }
        if (!email || !password || !mobile || !username) {
            console.log("Please provide all information !")
            return res.status(500).send({ message: "Not enough info" })
        }
        let valEmail = validEmail(email);
        if (!valEmail) {
            console.log("please enter valid email: ")
            return res.status(500).send({ message: "Invalid Email" })
        }
        let valPass = validPassword(password);
        if (!valPass) {
            console.log("please enter valid password: ")
            return res.status(500).send({ message: "Invalid Password" })
        }
        let valMob = validMobile(mobile);
        if (!valMob) {
            console.log("Please enter valid Mobile Number: ")
            return res.status(500).send({ message: "Invalid Phone" })
        }
        //unique validation
        let uniqueEmail = await collection.findOne({ email })
        if (uniqueEmail) {
            console.log('Email exists')
            return res.status(500).send({ message: "Email already exists!" })
        }
        let uniquePhone = await collection.findOne({ mobile })
        if (uniquePhone) {
            console.log('Phone Number exists')
            return res.status(500).send({ message: "Phone Number already exists!" })
        }
        reateUlet cs = await collection.create(data)
        console.log(createUs)
        return res.status(200).send({ message: "Success" })
        // navigate('/login') work needed
    } catch (error) {
        console.log(error)
    }
});

app.post("/delete", async (req, res) => {
    try {
        const user = req.body
        const { email } = user;

        const data = {
            email: email
        }
        let uniqueEmail = await collection.findOne({ email })
        console.log(user)
        if (!uniqueEmail) {
            console.log('invalid email')
            return res.status(500).send({ message: "Weird error" })
        }
        await collection.deleteMany(data)
        return res.status(200).send({ message: "Deleted successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Catxh error" })
    }
});

app.post("/userFind", async (req, res) => {
    try {
        const user = req.body
        const { email } = user;
        
        const data = {
            email: email
        }
        //console.log("backtrackiung", email)
        let userdata = await collection.findOne({ email })
        console.log(userdata.admin)
        //console.log("CHeckuinbg", userdata)
        return res.status(200).send({ message: "ID retrieved", mobile: userdata.mobile, email: userdata.email, password: userdata.password, username: userdata.username, admin: userdata.admin })
    } catch (error) {
        console.log(error)
    }
})
app.get("/getall", async (req, res) => {
    try {
        let userDetails = await pData.find({})
        console.log(userDetails);
        res.send({ data: userDetails });
    } catch (error) {
        console.log(error)
    }
});
app.get("/getallcart", async (req, res) => {
    cartModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

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
app.get("/validAuth", async (req, res) => {
    const data = fs.readFileSync('log.txt', 'utf8');
    console.log(data);
    return data
});
app.post("/logout", async (req, res) => {
    try {
        fs.writeFileSync('log.txt', '');
        var data = fs.readFileSync('log.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error)
    }
});
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
app.post("/addItem", async (req, res) => {
    try {
        const itm = req.body
        const { product, amount, id } = itm;
        let checkItem = await cartModel.findOne({ id });
        if (checkItem) {
            console.log("MEOW");
            const new_amount = { amount: checkItem.amount + 1 };
            let updated_value = await cartModel.updateOne({ id }, new_amount);
            let laVal = await cartModel.findOne({ id });
            return res.status(200).send({ data: laVal })
        } else {
            console.log("1")
            const new_amount = 1;
            const data = {
                product: product,
                amount: new_amount,
                id: id
            }
            console.log("2")
            await cartModel.create(data);
            console.log("3")
            return res.status(200)
        }
    }
    catch (error) {
        return res.status(404).send({ message: "fail" })
    }
});
app.listen(8080, () => {
    console.log("port connected")
})