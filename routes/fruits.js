const { Router } = require("express");
const fruitsRoute = Router();
const { FruitController } = require("../controllers");

fruitsRoute.get("/", FruitController.getFruits);
fruitsRoute.get("/add", FruitController.addFruitPage);
fruitsRoute.post("/add", FruitController.addFruit);
fruitsRoute.get("/delete/:id", FruitController.deleteFruit);
fruitsRoute.get("/update/:id", FruitController.updateFruitPage);
fruitsRoute.post("/update/:id", FruitController.updateFruit);

module.exports = fruitsRoute;
