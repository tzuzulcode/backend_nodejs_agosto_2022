const Food = require("../models/food");

class FoodService {
  async getAll() {
    try {
      const food = await Food.find(); // Consulta para obtener todos los items

      return {
        success: true,
        data: food,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocurrió un error, verifica la consola",
      };
    }
  }
  async create(data) {
    try {
      const food = await Food.create(data);
      return {
        success: true,
        data: food,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error al crear",
      };
    }
  }

  async edit(id, data) {
    try {
      const food = await Food.findByIdAndUpdate(id, data, { new: true });
      return {
        success: true,
        data: food,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error al editar registro",
      };
    }
  }

  async getById(id) {
    try {
      const food = await Food.findById(id);
      return {
        success: true,
        data: food,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Algo ocurrio",
      };
    }
  }

  async delete(id) {
    try {
      const food = await Food.findByIdAndDelete(id);
      return {
        success: true,
        data: food,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Algo paso al intentar borrar un registro",
      };
    }
  }
}

module.exports = FoodService;
