let Category = require("../models/category");
const router = require("express").Router();


router.route("/productCategory").get((req, res) => {
    Category.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addProductCategory").post((req, res) => {
const category = req.body.category;
  console.log("category:",category)
  const newCategory = new Category({
    category,   
  });

  newCategory
    .save()
    .then(() => res.json("productCategory added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
