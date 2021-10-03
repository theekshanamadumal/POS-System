const router = require("express").Router();
let ProductCategoryController = require("../controllers/productCategoryController");
const { authJwt } = require("../middlewares");


router.route("/productCategory").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductCategoryController.allCategories(res);
});

router.route("/addProductCategory").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductCategoryController.addNewCategory(req,res);
});


module.exports = router;
