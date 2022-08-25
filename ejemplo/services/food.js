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
    async getById(){
        try {
            const { id } = req.params;
            const food = await Food.findById(id) // Consulta para obtener todos los items
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
    async createFood(){
        try {
            const { name, price } = req.body;
            if(!name && !price) {
                return {
                    success:false,
                    message:"No hay suficientes datos"
                }
            }
            const food = new Foot({
                name,
                price
            });
            await food.save();

            return {
                success:true,
                message:"Producto creado con exito"
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"Ocurrió un error, verifica la consola"
            }
        }
    }
    async updateFood(){
        try {
            const { id } = req.params;
            const { name, price } = req.body;

            if(!name && !price) {
                return {
                    success:false,
                    message:"No hay suficientes datos"
                }
            }

            const updates = { ...req.body };
            const options = { new: true };
            await Food.findByIdAndUpdate(id, updates, options);
            return {
                success:true,
                message: "Producto actualizado con exito"
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"Ocurrió un error, verifica la consola"
            }
        }
    }
    async deleteFood(){
        try {
            const { id } = req.params;
            await Food.findByIdAndDelete(id);
            return {
                success:true,
                message: "Producto eliminado con exito"
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