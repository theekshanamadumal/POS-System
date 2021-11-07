const router = require("express").Router();
const { authJwt } = require("../middlewares");
let UserController = require("../controllers/userController");
const UC = new UserController("Manager");


router.route("/salesperson").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.allUsers(res);
});
router.route("/salesperson/count").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.countSellers(res);
});

router.route("/salespersonCount").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.countSellers(res);
 
});


router.route("/salesperson/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.getUser(req,res);
 });


module.exports = router;
