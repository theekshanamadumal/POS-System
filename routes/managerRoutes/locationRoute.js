const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let LocationController = require("../../controllers/sellerLocationController");

router.use(  
  //[authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


router.route("/sellerLocation").get((req, res) => {
   LocationController.allLocations(req,res);
});


router.route("/sellerLocation/:id").get((req, res) => {
  LocationController.userLocation(req,res);
});

module.exports = router;
