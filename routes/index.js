const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.json({
  //   message: "Welcome to Fruit Store API",
  // });
  res.render("index.ejs");
});

const brandsRoutes = require("./brands");
const categoriesRoutes = require("./categories");
const fruitsRoutes = require("./fruits");

router.use("/fruits", fruitsRoutes);
router.use("/brands", brandsRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
