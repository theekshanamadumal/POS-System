const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let AnalyticsController = require("../../controllers/analyticsController");
const AC = AnalyticsController;


router.route("/analytics/categoryDuration/:duration").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  console.log("requested for group by routes..");
  AC.categoryAnalyticsDuration(req,res);
});

router.route("/analytics/salesPersonDuration/:duration").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  AC.sellersAnalyticsDuration(req,res);
});

router.route("/analytics/salesDuration/:duration").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  AC.salesAnalyticsDuration(req,res);
});

module.exports = router;
   