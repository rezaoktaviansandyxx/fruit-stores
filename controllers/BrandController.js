const { brand, fruit } = require("../models");

class BrandController {
  static async getBrands(req, res) {
    try {
      const brands = await brand.findAll({
        order: [["id", "ASC"]],
      });
      res.render("brands/brands.ejs", { brands: brands });
      // res.json(brands);
    } catch (err) {
      res.json(err);
    }
  }

  static async addBrandPage(req, res) {
    res.render("brands/addBrandPage.ejs");
  }

  static async addBrand(req, res) {
    try {
      const { name, image, city, total_employees } = req.body;
      let newBrand = await brand.create({
        name,
        image,
        city,
        total_employees,
      });
      let newFruit = await fruit.create({
        brandId: newBrand.id,
      });
      res.redirect("/brands");
      // res.json(newBrand);
    } catch (err) {
      res.json(err);
    }
  }

  static async deleteBrand(req, res) {
    try {
      const id = +req.params.id;
      const result = await brand.destroy({
        where: { id },
      });
      let resultFruit = await fruit.destroy({
        where: { brandId: id },
      });
      result === 1
        ? res.redirect("/brands")
        : res.json({
            message: `Brand with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateBrandPage(req, res) {
    try {
      const id = +req.params.id;

      const result = await brand.findByPk(id);
      res.render("brands/updateBrandPage.ejs", { brand: result });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateBrand(req, res) {
    try {
      const id = +req.params.id;
      const { name, image, city, total_employees } = req.body;
      const result = await brand.update(
        {
          name,
          image,
          city,
          total_employees,
        },
        {
          where: { id },
        }
      );
      result[0] === 1
        ? res.redirect("/brands")
        : res.json({
            message: `Brand with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BrandController;
