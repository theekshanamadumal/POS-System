const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let billController = require("../../controllers/billController");

router.use(  
 // [authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.route("/invoice").get((req, res) => {
   billController.allBills(req,res);
});


router.route("/invoice/:id").get((req, res) => {
  billController.userBill(req,res);
});

module.exports = router;
