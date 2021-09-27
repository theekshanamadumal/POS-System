let Category = require("../models/category");
const router = require("express").Router();
let ProductCategoryController = require("../controllers/productCategoryController");


router.route("/productCategory").get((req, res) => {
  ProductCategoryController.allCategories(res);
});

router.route("/addProductCategory").post((req, res) => {
  ProductCategoryController.addNewCategory(req,res);
});


module.exports = router;
