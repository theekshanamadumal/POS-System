const router = require("express").Router();
const Salesperson = require("../models/salesperson");

router.route("/salesperson").get((req, res) => {
Salesperson.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addSalesperson").post((req, res) => {
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

  const newUser = new Salesperson({
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
    .then(() => res.json("salesperson added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/salesperson:id").get((req, res) => {
  Salesperson.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/salesperson/:id").delete((req, res) => {
  Salesperson.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateSalesperson/:id").post((req, res) => {
  Salesperson.findById(req.params.id)
    .then((salesperson) => {
    salesperson.firstName = req.body.firstName;
    salesperson.lastName = req.body.lastName;
    salesperson.idNumber = req.body.idNumber;
    salesperson.firstName = req.body.firstName;
    salesperson.lastName = req.body.lastName;
    salesperson.image = req.body.image;
    salesperson.address = req.body.address;
    salesperson.city = req.body.city;
    salesperson.phoneNumber = Number(req.body.phoneNumber);
    salesperson.email = req.body.email;
    salesperson.joinedDate = Date(req.body.joinedDate);

    Salesperson
        .save()
        .then(() => res.json("manager updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
