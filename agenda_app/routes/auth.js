const {Router} = require("express")
const AuthService = require("../services/auth")

function auth(app){
    const router = Router()
    app.use(router,"/api/auth")

    const authServ = new AuthService()


    router.post("/login",async (req,res)=>{
        const result = await authServ.login(req.body)

        return res.status(result.success?200:400).json(result)
    })
}

module.exports = auth