const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let ProductController = require("../../controllers/productController");

router.route("/products").get((req, res) => {
   ProductController.allProducts(res);
});

router.route("/products/total").get((req, res) => {
   ProductController.totalStock(res);
});

router.route("/products/productIds").get((req, res) => {
   ProductController.allProductIds(res);
});

router.route("/products/addProduct").post((req, res) => {
  ProductController.addNewProduct(req,res);
 
});

router.route("/product/:id").get((req, res) => {
  ProductController.getProduct(req,res);
});

router.route("/product/:id").delete((req, res) => {
  ProductController.deleteProduct(req,res );
});

router.route("/updateProduct/:id").post((req, res) => {
  ProductController.updateProduct(req,res );
});


module.exports = router;
