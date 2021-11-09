const router = require("express").Router();
let ProductCategoryController = require("../../controllers/productCategoryController");
const { authJwt } = require("../../middlewares");

router.use(  
 // [authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


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
