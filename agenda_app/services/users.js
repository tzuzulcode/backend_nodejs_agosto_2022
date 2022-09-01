const handleError = require('../helpers/handleError')
const User = require('../models/User')

class Users {
    async getOneByEmail(email) {
        try {
            const user = await User.findOne({
                email
            })

            return {
                data: user,
                success: user ? true : false
            }
        } catch (error) {
            return {
                message: error.message,
                success: false
            }
        }
    }

    async create(data) {
        try {
            const user = await User.create(data)
            return {
                data: user,
                success: true
            }
        } catch (error) {
            return handleError(error)
        }
    }
}

module.exports = Users
