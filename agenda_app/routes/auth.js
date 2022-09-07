const { Router } = require('express')
const { prod } = require('../config')
const AuthService = require('../services/auth')

function auth(app) {
    const router = Router()
    app.use('/api/auth', router)

    const authServ = new AuthService()

    router.post('/login', async ({ body }, res) => {
        const result = await authServ.login(body)

        if(result.success){
            return res.status(200).cookie("token",result.token,{
                httpOnly:true,
                secure:prod,
                sameSite:"none",
                // expires: // Reto: Colocar fecha de expiración de 7 dias
                expires:new Date(new Date().setDate(new Date().getDate() + 7))
            }).json({
                success:result.success,
                data:result.data
            })
        }

        return res.status(400).json(result)

    })

    router.post('/signup', async ({ body }, res) => {
        const result = await authServ.signup(body)

        return res.status(result.success ? 200 : 400).json(result)
    })
}

module.exports = auth
