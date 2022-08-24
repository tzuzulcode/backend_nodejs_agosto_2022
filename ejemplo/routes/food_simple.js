const {Router} = require("express")
const FoodService = require("../services/food")

function food(app){
    const router = Router()
    const foodServ = new FoodService()

    app.use("/api/food_simple",router)

    router.get("/",async (req,res)=>{
        const food = await foodServ.getAll()
        return res.status(food.success?200:400).json(food)
    })

    // Actividad: Completar endpoints: getById, create, updateById, deleteById
}

module.exports = food