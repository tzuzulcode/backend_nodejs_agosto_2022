import joi from 'joi'

export const createUserSchema = joi.object({
	name:joi.string().min(1).max(100).required(),
	email: joi.string().email().required(),
	gender: joi.string().valid('Masculino', 'Femenino', 'Otros').required(),
	birthDate:joi.date().required(),
	password: joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%$&?])[\w!@#$%&?]{8,}$/).required(), // Agregar expresion para password: contenga mayuscula, minuscula y un caracter especial
	passwordConfirmation: joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%$&?])[\w!@#$%&?]{8,}$/).required(),
	phone: joi.number().min(999999999).max(1000000000)
})