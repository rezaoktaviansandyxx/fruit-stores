const { brand, fruit } = require("../models");

class BrandController {
  static async getBrands(req, res) {
    try {
      let brands = await brand.findAll({});
      res.json(brands);
    } catch (err) {
      res.json(err);
    }
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
      res.json(newBrand);
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
        ? res.json({ message: `Brand with id: ${id} Deleted!` })
        : res.json({
            message: `Brand with id: ${id} not found`,
          });
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
        ? res.json({ message: `Brand with id: ${id} Updated!` })
        : res.json({
            message: `Brand with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BrandController;
