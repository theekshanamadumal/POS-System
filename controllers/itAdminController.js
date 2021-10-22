const db = require("../models");
const User = db.user;

module.exports =  class UserController {
  
    // Constructor
    constructor() {
    }

    static allManagement(res) {
        User.find()
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
    }


// Static method
    static addNewProduct(req,res ) {
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
    }

    static getProduct(req,res ) {
        console.log(req.params.id)
        Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error: " + err));
    }

    static deleteProduct(req,res ) {
        console.log(req.params.id)
        Product.findByIdAndDelete(req.params.id)
        .then(() => res.json("Product deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    static updateProduct(req,res ) {
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
        }
}