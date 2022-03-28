const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre("save", function(next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    return next();
})

userScherma.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, userSchema)
}

module.exports = mongoose.model("user", userSchema)