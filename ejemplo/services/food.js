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
    async getById(id){
        try {
            if(!id){
                return {
                    success:false,
                    messsage:"Not found"
                }
            }
            const food = await Food.findById(id)
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
    async create(data){
        try {
            const { name, price } = data;
            if(!name && !price) {
                return {
                    success:false,
                    message:"No hay suficientes datos"
                }
            }
            // const food = new Food({
            //     name,
            //     price
            // });
            // await food.save();

            const food = await Food.create({
                name,
                price
            })

            return {
                success:true,
                message:"Producto creado con exito",
                data: food
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"Ocurrió un error, verifica la consola"
            }
        }
    }
    async update(id,data){
        try {
            // const { name, price } = data;

            const options = { new: true };

            const food = await Food.findByIdAndUpdate(id, data, options);
            return {
                success:true,
                message: "Producto actualizado con exito",
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
    async delete(id){
        try {
            const food = await Food.findByIdAndDelete(id);
            return {
                success:true,
                message: "Producto eliminado con exito",
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