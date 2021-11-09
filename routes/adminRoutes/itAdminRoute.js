const router = require("express").Router();
//const { authJwt } = require("../../middlewares");
let UserController = require("../../controllers/userController");
let AuthController = require("../../controllers/authController");
const UC = new UserController("Admin");

var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })


router.route("/user").get((req, res) => {
  UC.allUsers(res);
});

router.route("/managerCount").get((req, res) => {
  UC.countManagers(res);
});
router.route("/userCount").get((req, res) => {
  UC.countUsers(res);
});
//upload.single("image")
router.route("/addUser").post((req, res) => {
  console.log("adduser route",require);
  AuthController.signup(req,res);
  //console.log("ser",UC.addUser(req,res));
});

router.route("/user/:id").get(  
  (req, res) => { UC.getUser(req,res);
});

router.route("/user/:id").delete((req, res) => {
  UC.deleteUser(req,res);
  });

router.route("/userUpdate/:id").post((req, res) => {
  UC.updateUser(req,res);
  
});

router.route("/userUpdate/:id").post((req, res) => {
  UC.updateUser(req,res);
  
});

module.exports = router;
