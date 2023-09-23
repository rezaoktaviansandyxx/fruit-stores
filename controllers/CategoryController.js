const { category } = require("../models");
class CategoryController {
  static async getCategories(req, res) {
    try {
      const categories = await category.findAll({
        order: [["id", "ASC"]],
      });

      res.json(categories);
    } catch (err) {
      res.json(err);
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body;
      let newCategory = await category.create({
        name,
      });
      res.json(newCategory);
    } catch (err) {
      res.json(err);
      // console.error(err);
    }
  }

  static async deleteCategory(req, res) {
    try {
      const id = +req.params.id;
      console.log(id);
      const result = await category.destroy({
        where: { id },
      });
      result === 1
        ? res.json({ message: `Category with id: ${id} Deleted!` })
        : res.json({
            message: `Category with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateCategory(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      const result = await category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      result[0] === 1
        ? res.json({ message: `Category with id: ${id} Updated!` })
        : res.json({
            message: `Category with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
