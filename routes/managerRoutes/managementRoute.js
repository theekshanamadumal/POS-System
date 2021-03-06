const router = require("express").Router();
const { authJwt } = require("../../middlewares");
let UserController = require("../../controllers/userController");
const UC = new UserController("Manager");


router.route("/salesperson").get((req, res) => {
  UC.allUsers(res);
});
router.route("/salesperson/count").get((req, res) => {
  UC.countSellers(res);
});

router.route("/salespersonCount").get((req, res) => {
  UC.countSellers(res);
 
});

router.route("/salesperson/:id").get((req, res) => {
  UC.getUser(req,res);
 });


module.exports = router;
