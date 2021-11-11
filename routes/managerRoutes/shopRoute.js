const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let ShopController = require("../../controllers/shopController");
const SC = ShopController;


router.route("/shops").get((req, res) => {
  SC.allShops(req,res);
});

router.route("/shops/count").get((req, res) => {
  SC.countShops(req,res);
});

router.route("/shops/groupByRoute").get((req, res) => {
  SC.groupByRoutes(req,res);
});


router.route("/shops/getRoutes/:dailyRoute").get((req, res) => {
  SC.allShopRoute(req,res);
});

router.route("/shops/addShop").post((req, res) => {
  SC.addNewShop(req,res);
});

router.route("/shop/:id").get((req, res) => {
  SC.getShop(req,res);
});

router.route("/shop/:id").delete((req, res) => {
  SC.deleteShop(req,res);
});

router.route("/updateShop/:id").post((req, res) => {
  SC.updateShop(req,res);
});

module.exports = router;
