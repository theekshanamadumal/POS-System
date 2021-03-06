const db = require("../models");
const Product = db.product;

module.exports =  class ProductController {
  
    // Constructor
    constructor() {
    }

    static allProducts(res) {
        Product.find()
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
        return this.res;
        }

    static allProductIds(res) {
        Product.find()
        .select("_id  itemName stock unitPrice")
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
        return this.res;
    }
    static totalStock(res) {
        console.log("req for tot stock..")
        Product.aggregate([
            {"$group" : {_id:"", count:{$sum:"$stock"}}}])
        .then((total) => res.json(total[0].count))
        .catch((err) => res.status(400).json("Error: " + err));
        return this.res;
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