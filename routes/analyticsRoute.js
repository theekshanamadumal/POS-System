const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../middlewares");
let AnalyticsController = require("../controllers/analyticsController");
const AC = AnalyticsController;


router.route("/analytics/category").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  console.log("requested for group by routes..");
  AC.categoryAnalytics(req,res);
});

router.route("/analytics/sellers").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  AC.sellersAnalytics(req,res);
});

router.route("/analytics/sales").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  AC.salesAnalytics(req,res);
});



module.exports = router;
   