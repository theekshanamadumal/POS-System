const router = require("express").Router();
const { authJwt } = require("../middlewares");
let UserController = require("../controllers/userController");
const UC = new UserController("Admin");

var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

router.route("/management").get((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],s
  UC.allUsers(res);
 
});

router.route("/addManager").post(upload.single("image"),(req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.addUser(req,res);
  //console.log("ser",UC.addUser(req,res));
  
});

router.route("/management/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.getUser(req,res);
});

router.route("/management/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.deleteUser(req,res);
  });

router.route("/managerUpdate/:id").post((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.updateUser(req,res);
  
});

module.exports = router;
