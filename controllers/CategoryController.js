const { category } = require("../models");
class CategoryController {
  static async getCategories(req, res) {
    try {
      const categories = await category.findAll({
        order: [["id", "ASC"]],
      });

      // res.json(categories);
      res.render("categories/categories.ejs", { categories: categories });
    } catch (err) {
      res.json(err);
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body;
      const newCategory = await category.create({
        name,
      });
      // res.json(newCategory);
      res.redirect("/categories");
    } catch (err) {
      res.json(err);
      // console.error(err);
    }
  }

  static async addCategoryPage(req, res) {
    res.render("categories/addCategoryPage.ejs");
  }

  static async deleteCategory(req, res) {
    try {
      const id = +req.params.id;
      console.log(id);
      const result = await category.destroy({
        where: { id },
      });
      result === 1
        ? res.redirect("/categories")
        : res.json({
            message: `Category with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateCategoryPage(req, res) {
    try {
      const id = +req.params.id;
      const result = await category.findByPk(id);
      res.render("categories/updateCategoryPage.ejs", { category: result });
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
        ? res.redirect("/categories")
        : res.json({
            message: `Category with id: ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
