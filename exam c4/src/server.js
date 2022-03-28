//git push -u origin main
//mongodb+srv://Shawon1997:<password>@cluster0.ryj4d.mongodb.net/test


const express = require("express")
const app = express()
app.use(express.json())
const connect = require("./config/user.connect")

const { register, login } = require("./controler/auth.controler")
app.post("register", register)
app.post("login", login)
app.listen(7999, async() => {
    try {
        await connect();
        console.log("i am in port 7999")
    } catch (err) {
        console.log(err.message)
    }
})