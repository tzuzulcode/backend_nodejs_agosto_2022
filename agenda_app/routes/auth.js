const { Router } = require('express')
const AuthService = require('../services/auth')

function auth(app){
    const router = Router()
    app.use('/api/auth', router)

    const authServ = new AuthService()

    router.post('/login', async ({body},res)=>{
        const result = await authServ.login(body)

        return res.status(result.success? 200:400).json(result)
    })

    router.post('/singup', async ({body}, res) => {
        const result = await authServ.singup(body)

        return res
            .status(result.success? 200:400)
            .json(result)
    })
}

module.exports = auth