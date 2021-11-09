const router = require("express").Router();
let ProductCategoryController = require("../../controllers/productCategoryController");
const { authJwt } = require("../../middlewares");

router.route("/productCategory").get((req, res) => {
  ProductCategoryController.allCategories(res);
});

router.route("/productCategory/count").get((req, res) => {
  ProductCategoryController.countCategories(res);
});

router.route("/products/addProductCategory").post((req, res) => {
  ProductCategoryController.addNewCategory(req,res);
});

module.exports = router;
