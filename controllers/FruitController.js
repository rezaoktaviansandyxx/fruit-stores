const { fruit, category, brand } = require("../models");

class FruitController {
  static async getFruits(req, res) {
    try {
      const fruits = await fruit.findAll({
        include: [brand, category],
        order: [["id", "ASC"]],
      });
      res.json(fruits);
    } catch (err) {
      res.json(err);
    }
  }

  static async addFruit(req, res) {
    try {
      const { name, image, price, stock, categoryId, brandId } = req.body;
      let newFruit = await fruit.create({
        name,
        image,
        price,
        stock,
        categoryId,
        brandId,
      });
      res.json(newFruit);
    } catch (err) {
      res.json(err);
    }
  }

  static async deleteFruit(req, res) {
    try {
      const id = +req.params.id;
      const fruitResult = await fruit.destroy({
        where: { id },
      });
      fruitResult === 1
        ? res.json({ message: `Fruit with id: ${id} Deleted!` })
        : res.json({ message: `Fruit with id: ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateFruit(req, res) {
    try {
      const id = +req.params.id;
      const { name, image, price, stock, categoryId, brandId } = req.body;
      const fruitResult = await fruit.update(
        {
          name,
          image,
          price,
          stock,
          categoryId,
          brandId,
        },
        {
          where: { id },
        }
      );

      fruitResult[0] === 1
        ? res.json({ message: `Fruit with id: ${id} Updated!` })
        : res.json({ message: `Fruit with id: ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FruitController;
