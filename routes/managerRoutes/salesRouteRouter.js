const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let SalesRoutesController = require("../../controllers/salesRoutesController");
const SC = SalesRoutesController;

router.use(  
 // [authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.route("/salesRoutes").get((req, res) => {
  SC.allRoutes(req,res);
});

router.route("/addSalesRoute").post((req, res) => {
  SC.addNewRoute(req,res);
});

router.route("/salesRoute/:id").get((req, res) => {
  SC.getRoute(req,res);
});

router.route("/salesRoute/:id").delete((req, res) => {
  SC.deleteRoute(req,res);
  
});

router.route("/updateSalesRoute/:id").post((req, res) => {
  console.log("back resieved route update request ");
  SC.updateRoute(req,res);
  
});

module.exports = router;
