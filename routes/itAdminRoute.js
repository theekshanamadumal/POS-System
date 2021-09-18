const router = require("express").Router();
let Manager = require("../models/manager");

router.route("/management").get((req, res) => {
 Manager.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addManager").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const idNumber = req.body.idNumber;
  const image = req.body.image;
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

router.route("/:id").get((req, res) => {
   Manager.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/users/:id").delete((req, res) => {
   Manager.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/userUpdate/:id").post((req, res) => {
   Manager.findById(req.params.id)
    .then((manager) => {
     manager.firstName = req.body.firstName;
     manager.lastName = req.body.lastName;
     manager.idNumber = req.body.idNumber;
     manager.firstName = req.body.firstName;
     manager.lastName = req.body.lastName;
     manager.image = req.body.image;
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
