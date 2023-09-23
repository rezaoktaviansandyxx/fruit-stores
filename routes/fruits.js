const { Router } = require("express");
const fruitsRoute = Router();
const { FruitController } = require("../controllers");

fruitsRoute.get("/", FruitController.getFruits);
fruitsRoute.post("/add", FruitController.addFruit);
fruitsRoute.get("/delete/:id", FruitController.deleteFruit);
fruitsRoute.post("/update/:id", FruitController.updateFruit);

module.exports = fruitsRoute;
