const UserModel = require('../models/User')

class Users {
    async getAll() {
        try {
            const users = await UserModel.find()
            return users
        } catch (error) {
            // console.log(error)
            return {
                success: false,
                message: 'Ocurrió un error'
            }
        }
    }
    async getByEmail(email) {
        try {
            const user = await UserModel.findOne({ email })
            return user
        } catch (error) {
            // console.log(error)
            return {
                success: false,
                message: 'Ocurrió un error'
            }
        }
    }

    async create(data) {
        try {
            const user = await UserModel.create(data)
            return user
        } catch (error) {
            if (error.code === 11000) {
                const message = `El correo "${error.keyValue.email}" ya está en uso`
                return {
                    error: true,
                    message
                }
            }
        }
    }

    async update(id, data) {
        try {
            const user = await UserModel.findByIdAndUpdate(id, data, {
                new: true
            })
            return user
        } catch (error) {
            // console.log(error)
            return {
                success: false,
                message: 'Ocurrió un error'
            }
        }
    }

    async delete(id) {
        try {
            const user = await UserModel.findByIdAndDelete(id)
            return user
        } catch (error) {
            // console.log(error)
            return {
                success: false,
                message: 'Ocurrió un error'
            }
        }
    }
}

module.exports = Users
