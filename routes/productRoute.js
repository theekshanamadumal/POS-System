const router = require("express").Router();
let Product = require("../models/product");

router.route("/management/products").get((req, res) => {
    Product.find()
    .then((Product) => res.json(Product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addProduct").post((req, res) => {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const stock = Number(req.body.stock);
  const active = req.body.active;
  
  const newProduct = new Product({
    itemName,
    description,
    stock,
    active,
    
  });

  newProduct
    .save()
    .then(() => res.json("product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/management/product/:id").get((req, res) => {
    Product.findById(req.params.id)
    .then((product) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/management/product/:id").delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/management/product/update/:id").post((req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
     
      product.itemName = req.body.itemNamee;
      product.description = req.body.descriptions;
      product.stock = Number(req.body.stock);
      product.active = req.body.activel;

      product
        .save()
        .then(() => res.json("product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
