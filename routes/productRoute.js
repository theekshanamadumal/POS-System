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

router.route("/product/:id").get((req, res) => {
    console.log(req.params.id)
    Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/product/:id").delete((req, res) => {
  console.log(req.params.id)
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateProduct/:id").post((req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
     
    product.itemName = req.body.itemName;
    product.category = req.body.category;
    product.unitPrice = Number(req.body.unitPrice);
    product.stock = Number(req.body.stock);
    product.description = req.body.description;
  
      product
        .save()
        .then(() => res.json("product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
