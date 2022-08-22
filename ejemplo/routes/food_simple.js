const {Router} = require("express")
const Food = require("../models/food")

function food(app){
    const router = Router()

    app.use("/api/food_simple",router)

    router.get("/",async (req,res)=>{
        const food = await Food.find() // Consulta para obtener todos los items
        return res.json(food)
    })
}

module.exports = food