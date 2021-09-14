const router = require("express").Router();
let User = require("../models/user");

router.route("/users").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/users/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const idNumber = req.body.idNumber;
  const image = req.body.image;
  const password = req.body.password;
  const address = req.body.address;
  const phoneNumber = Number(req.body.phoneNumber);
  const email = req.body.email;
  const joinedDate = Date(req.body.joinedDate);

  const newUser = new User({
    firstName,
    lastName,
    idNumber,
    image,
    password,
    address,
    phoneNumber, 
    email,
    joinedDate
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/users/:id").get((req, res) => {
    User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/users/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/users/update/:id").post((req, res) => {
    User.findById(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.idNumber = req.body.idNumber;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.image = req.body.image;
      user.address = req.body.address;
      user.phoneNumber = Number(req.body.phoneNumber);
      user.email = req.body.email;
      user.joinedDate = Date(req.body.joinedDate);

      user
        .save()
        .then(() => res.json("user updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
