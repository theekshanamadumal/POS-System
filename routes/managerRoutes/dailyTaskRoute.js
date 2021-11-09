const router = require("express").Router();
//let Shop = require("../models/shop");
const { authJwt } = require("../../middlewares");
let dailyTaskController = require("../../controllers/dailyTaskController");
const DT = dailyTaskController;

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
