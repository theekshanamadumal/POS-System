const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let LocationController = require("../../controllers/sellerLocationController");

router.route("/sellerLocation").get((req, res) => {
   LocationController.allLocations(req,res);
});


router.route("/sellerLocation/:id").get((req, res) => {
  LocationController.userLocation(req,res);
});

module.exports = router;
