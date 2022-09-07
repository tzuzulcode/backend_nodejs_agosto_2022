import mongoose from '../config/db.js'

const genderEnum = [
	'Masculino', 'Femenino', 'Otros'
]

const userSchema = new mongoose.Schema({
	birthDate: Date,
	email: {
		type: String,
		unique: true
	},
	gender: {
		enum: genderEnum,
		type: String
	},
	name: String,
	password: String,
	phone: Number
})

const User = mongoose.model('User', userSchema)

export default User
