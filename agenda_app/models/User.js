// const {mongoose:{Schema,Model}} = require("../config/db")

const { mongoose } = require('../config/db')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
