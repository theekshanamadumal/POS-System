const router = require("express").Router();
const { authJwt } = require("../middlewares");
let SalesRoutesController = require("../controllers/salesRoutesController");
const SC = SalesRoutesController;


router.route("/salesRoutes").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.allRoutes(req,res);
});

router.route("/addSalesRoute").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.addNewRoute(req,res);
});

router.route("/salesRoute/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.getRoute(req,res);
});

router.route("/salesRoute/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  SC.deleteRoute(req,res);
  
});

router.route("/updateSalesRoute/:id").post((req, res) => {
  console.log("back resieved route update request ");
  [authJwt.verifyToken, authJwt.isManager],
  SC.updateRoute(req,res);
  
});

module.exports = router;
