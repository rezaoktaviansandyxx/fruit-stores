const { Router } = require("express");
const categoriesRoute = Router();
const { CategoryController } = require("../controllers");

categoriesRoute.get("/", CategoryController.getCategories);
categoriesRoute.get("/add", CategoryController.addCategoryPage);
categoriesRoute.post("/add", CategoryController.addCategory);
categoriesRoute.get("/delete/:id", CategoryController.deleteCategory);
categoriesRoute.get("/update/:id", CategoryController.updateCategoryPage);
categoriesRoute.post("/update/:id", CategoryController.updateCategory);

module.exports = categoriesRoute;
