const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let AnalyticsController = require("../../controllers/adminAnalyticsController");
const AC = AnalyticsController;


router.route("/analytics/signups").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  console.log("requested for group by routes..");
  AC.signups(req,res);
});

router.route("/analytics/signins").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  AC.signins(req,res);
});





module.exports = router;
   