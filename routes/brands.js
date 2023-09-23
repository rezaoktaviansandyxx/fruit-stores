const { Router } = require("express");
const brandsRoute = Router();
const { BrandController } = require("../controllers");

brandsRoute.get("/", BrandController.getBrands);
brandsRoute.get("/add", BrandController.addBrandPage);
brandsRoute.post("/add", BrandController.addBrand);
brandsRoute.get("/delete/:id", BrandController.deleteBrand);
brandsRoute.get("/update/:id", BrandController.updateBrandPage);
brandsRoute.post("/update/:id", BrandController.updateBrand);

module.exports = brandsRoute;
