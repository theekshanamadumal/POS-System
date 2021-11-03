const router = require("express").Router();
const { authJwt } = require("../middlewares");
let UserController = require("../controllers/userController");
const UC = new UserController("Admin");

var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

router.route("/user").get((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.allUsers(res);
 
});

router.route("/addUser").post(upload.single("image"),(req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.addUser(req,res);
  //console.log("ser",UC.addUser(req,res));
  
});

router.route("/user/:id").get((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.getUser(req,res);
});

router.route("/user/:id").delete((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.deleteUser(req,res);
  });

router.route("/userUpdate/:id").post((req, res) => {
  [authJwt.verifyToken, authJwt.isAdmin],
  UC.updateUser(req,res);
  
});

module.exports = router;
