const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../middlewares");
let ShopController = require("../controllers/shopController");
const SC = ShopController;


router.route("/shops").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.allShops(req,res);
});


router.route("/shopsCount").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  console.log("shop count request to back")
  SC.shopCount(res);
 
});

router.route("/shops/getRoutes/:dailyRoute").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.allShopRoute(req,res);
});

router.route("/addShop").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.addNewShop(req,res);


});

router.route("/shop/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.getShop(req,res);

});

router.route("/shop/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.deleteShop(req,res);
});

router.route("/updateShop/:id").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],  
  SC.updateShop(req,res);

});

module.exports = router;
