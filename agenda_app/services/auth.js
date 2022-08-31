const Users = require("./users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { jwtSecret } = require("../config")

class Auth{

    constructor(){
        this.#users = new Users()
    }

    async login(data){
        const {email,password} = data
        if(!email || !password){
            return {
                success:false,
                message:"Incorrect credentials"
            }
        }

        const {success,data:user,message} = await this.#users.getOneByEmail(email)
        if(success && await this.#compare(password,user.password)){
            delete user.password
            console.log(user)
            const token = this.#createToken(user)
            return {
                success:true,
                data:user,
                token
            }
        }

        return {
            success:false,
            message:"Incorrect credentials"
        }

    }

    // Implementar el signup

    #compare(string,hash){
        try {
            return bcrypt.compare(string,hash)
        } catch (error) {
            return false
        }
    }

    #createToken(data){
        return jwt.sign(data,jwtSecret,{
            expiresIn:"7d"
        })
    }
}

module.exports = Auth