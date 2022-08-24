const Food = require("../models/food")

class FoodService{
    async getAll(){
        try {
            const food = await Food.find() // Consulta para obtener todos los items
            
            return {
                success:true,
                data:food
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"Ocurrió un error, verifica la consola"
            }
        }
    }
}

module.exports = FoodService