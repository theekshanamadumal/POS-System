const router = require("express").Router();
let Manager = require("../models/manager");
var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

router.route("/management").get((req, res) => {
 Manager.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addManager").post(upload.single("image"),(req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const idNumber = req.body.idNumber;

  const selectedImage = req.body.image;
  const imgData = selectedImage.buffer;
  console.log(imgData)

  const imgcontentType = "image/jpg";
  const image= {data: imgData, 
                contentType: imgcontentType};

  const password = req.body.password;
  const address = req.body.address;
  const city = req.body.city;
  const phoneNumber = Number(req.body.phoneNumber);
  const email = req.body.email;
  const joinedDate = Date(req.body.joinedDate);

  const newUser = new Manager({
    firstName,
    lastName,
    idNumber,
    image,
    password,
    address,
    city,
    phoneNumber, 
    email,
    joinedDate
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/management/:id").get((req, res) => {
  console.log('req.params.id')
  console.log(req.params.id)
  Manager.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/management/:id").delete((req, res) => {
  console.log('req.params.id')
  console.log(req.params.id)
   Manager.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/managerUpdate/:id").post((req, res) => {
  
   Manager.findById(req.params.id)
    .then((manager) => {

      const selectedImage = req.body.image;
      const imgData = selectedImage.buffer;
      const imgcontentType = "image/jpg";
      const image= {data: imgData, 
                    contentType: imgcontentType};


     manager.firstName = req.body.firstName;
     manager.lastName = req.body.lastName;
     manager.idNumber = req.body.idNumber;
     manager.firstName = req.body.firstName;
     manager.lastName = req.body.lastName;
     manager.image =image;
     manager.password = req.body.password;
     manager.address = req.body.address;
     manager.city = req.body.city;
     manager.phoneNumber = Number(req.body.phoneNumber);
     manager.email = req.body.email;
     manager.joinedDate = Date(req.body.joinedDate);

     manager
        .save()
        .then(() => res.json("manager updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
