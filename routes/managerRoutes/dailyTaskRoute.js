const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let dailyTaskController = require("../../controllers/dailyTaskController");
const DT = dailyTaskController;

router.use(  
 // [authJwt.verifyToken, authJwt.isManager],
  function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


router.route("/dailyTasks").get((req, res) => {
  DT.alldailyTasks(req,res);
});

router.route("/dailyTasks/:id").get((req, res) => {
  DT.getdailyTask(req,res);

});

router.route("/adddailyTasks").post((req, res) => {
  console.log("get ti done...")
  DT.addNewdailyTask(req,res);
});



module.exports = router;
