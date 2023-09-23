const { fruit, category, brand } = require("../models");

class FruitController {
  static async getFruits(req, res) {
    try {
      const fruits = await fruit.findAll({
        include: [brand, category],
        order: [["id", "ASC"]],
      });
      // res.json(fruits);
      res.render("fruits/fruits.ejs", { fruits: fruits });
    } catch (err) {
      res.json(err);
    }
  }

  static async addFruitPage(req, res) {
    res.render("fruits/addFruitPage.ejs");
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
      // res.json(newFruit);
      res.redirect("/fruits");
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
        ? res.redirect("/fruits")
        : res.json({ message: `Fruit with id: ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateFruitPage(req, res) {
    try {
      const id = +req.params.id;
      const fruitResult = await fruit.findByPk(id);
      res.render("fruits/updateFruitPage.ejs", { fruit: fruitResult });
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
        ? res.redirect("/fruits")
        : res.json({ message: `Fruit with id: ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FruitController;
