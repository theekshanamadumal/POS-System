const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let AnalyticsController = require("../../controllers/analyticsController");
const AC = AnalyticsController;

router.use(  
 [authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.route("/analytics/category").get((req, res) => {
  console.log("requested for group by routes..");
  AC.categoryAnalytics(req,res);
});

router.route("/analytics/sellers").get((req, res) => {

  AC.sellersAnalytics(req,res);
});

router.route("/analytics/sales").get((req, res) => {
  AC.salesAnalytics(req,res);
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
   