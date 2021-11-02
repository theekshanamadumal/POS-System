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
  UC.countUsers(res);
});

router.route("/addSalesperson").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.addUser(req,res);
});

router.route("/salesperson/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.getUser(req,res);
 });

router.route("/salesperson/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  UC.deleteUser(req,res);
});

router.route("/updateSalesperson/:id").post((req, res) => {
  [authJwt.verifyToken, authJwt.isManager],
  console.log("posted id to update user",req.params.id),
  UC.updateUser(req,res);
});

module.exports = router;
