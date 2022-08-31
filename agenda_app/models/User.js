const { mongoose } = require('../config/db')

const genderEnum = ['Masculino', 'Femenino', 'Otros']

const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique: true},
    password: String,
    userId: { type:String, unique: true},
    birthDate: Date,
    phone: Number,
    gender:{type: String, enum: genderEnum}
})


const User = mongoose.model('User', userSchema)

module.exports = User
