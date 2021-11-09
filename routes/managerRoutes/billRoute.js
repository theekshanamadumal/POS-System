const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let billController = require("../../controllers/billController");

router.route("/invoice").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
   billController.allBills(req,res);
});


router.route("/invoice/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  billController.userBill(req,res);
});

module.exports = router;
