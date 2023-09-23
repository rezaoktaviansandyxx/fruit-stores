const { Router } = require("express");
const brandsRoute = Router();
const { BrandController } = require("../controllers");

brandsRoute.get("/", BrandController.getBrands);
brandsRoute.post("/add", BrandController.addBrand);
brandsRoute.get("/delete/:id", BrandController.deleteBrand);
brandsRoute.post("/update/:id", BrandController.updateBrand);

module.exports = brandsRoute;
