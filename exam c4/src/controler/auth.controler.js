const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

require("dotwnv").config();

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY)
};
const register = async(req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.send("email already exist")
        }


        user = await User.create(req.body);

        const token = generateToken(user);

        return res.send({ user, token })
    } catch (err) {
        return res.status().send(err.message)
    }
};;



const login = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.send("wrong email or password")
        }
        const token = generateToken(user)

        return res.send({ user, token });


    } catch (err) {
        ressend(err.message)
    }

}



module.exports = { register, login }