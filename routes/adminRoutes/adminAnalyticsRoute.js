const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let AnalyticsController = require("../../controllers/adminAnalyticsController");
const AC = AnalyticsController;

router.use(  
  [authJwt.verifyToken, authJwt.isAdmin],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.route("/analytics/signups").get((req, res) => {
  console.log("requested for group by routes..");
  AC.signups(req,res);
});

router.route("/analytics/signins").get((req, res) => {
  AC.signins(req,res);
});
module.exports = router;