const { Router } = require("express");
const categoriesRoute = Router();
const { CategoryController } = require("../controllers");

categoriesRoute.get("/", CategoryController.getCategories);
categoriesRoute.post("/add", CategoryController.addCategory);
categoriesRoute.get("/delete/:id", CategoryController.deleteCategory);
categoriesRoute.post("/update/:id", CategoryController.updateCategory);

module.exports = categoriesRoute;
