const router = require("express").Router();
let Product = require("../models/product");


router.route("/products").get((req, res) => {
    Product.find()
    .then((Product) => res.json(Product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addProduct").post((req, res) => {
const itemName = req.body.itemName;
const category = req.body.category;
const unitPrice = Number(req.body.unitPrice);
const stock = Number(req.body.stock);
const description = req.body.description;
  
  const newProduct = new Product({
    itemName,
    category,
    unitPrice,
    stock,
    description,
    
  });

  newProduct
    .save()
    .then(() => res.json("product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("product/:id").get((req, res) => {
    Product.findById(req.params.id)
    .then((product) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("product/:id").delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("product/update/:id").post((req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
     
    const itemName = req.body.itemName;
    const category = req.body.category;
    const unitPrice = Number(req.body.unitPrice);
    const stock = Number(req.body.stock);
    const description = req.body.description;
  
      product
        .save()
        .then(() => res.json("product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
