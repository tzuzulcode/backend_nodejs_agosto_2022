// const {mongoose:{Schema,Model}} = require("../config/db")

const { mongoose } = require('../config/db')

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
