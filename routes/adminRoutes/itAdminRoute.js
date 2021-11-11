const router = require("express").Router();
//const { authJwt } = require("../../middlewares");
let UserController = require("../../controllers/userController");
let AuthController = require("../../controllers/authController");
const UC = new UserController("Admin");

//image saving

var multer = require("multer");
let path = require('path');

//const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {   
      cb(null, 'userImg' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}


let upload = multer({ storage, fileFilter });
/////////////////////////////////////////////////////////


router.route("/user").get((req, res) => {
  UC.allUsers(res);
});

router.route("/managerCount").get((req, res) => {
  UC.countManagers(res);
});

router.route("/userCount").get((req, res) => {
  UC.countUsers(res);
});

router.route("/addUser").post((req, res) => {

  console.log("adduser route",req.body);
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
