const { Router } = require("express");
const FoodService = require("../services/food");

function food(app) {
  const router = Router();
  const foodServ = new FoodService();

  app.use("/api/food_simple", router);

  router.get("/", async (req, res) => {
    const food = await foodServ.getAll();
    return res.status(food.success ? 200 : 400).json(food);
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await foodServ.getById(id);
    return res.status(food.success ? 200 : 400).json(data);
  });

  router.post("/", async (req, res) => {
    const data = req.body;
    const food = await foodServ.create(data);
    return res.status(food.success ? 200 : 400).json(food);
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await foodServ.update(id, body);
    return res.status(food.success ? 200 : 400).json(data);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await foodServ.delete(id);
    return res.status(food.success ? 200 : 400).json(data);
  });
  
  // Actividad: Implementar linter: eslint, prettier, etc...
}

module.exports = food;
