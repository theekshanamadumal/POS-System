const router = require("express").Router();
const { authJwt } = require("../middlewares");
let ProductController = require("../controllers/productController");

router.route("/products").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
   ProductController.allProducts(res);
});

router.route("/products/total").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
   ProductController.totalStock(res);
});

router.route("/products/productIds").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
   ProductController.allProductIds(res);
});

router.route("/addProduct").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductController.addNewProduct(req,res);
 
});

router.route("/product/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductController.getProduct(req,res);
});

router.route("/product/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductController.deleteProduct(req,res );
});

router.route("/updateProduct/:id").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  ProductController.updateProduct(req,res );
});


module.exports = router;
