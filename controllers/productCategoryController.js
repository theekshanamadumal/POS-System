let Category = require("../models/category");

module.exports =  class ProductCategoryController {
  
    // Constructor
    constructor() {
          }
    
    static allCategories(res) {
      Category.find()
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json("Error: " + err));
      return this.res;
    }
    

    // Static method
    static addNewCategory(req,res ) {
      const category = req.body.category;
      console.log("category:",category)
      const newCategory = new Category({
        category,   
      });
    
      newCategory
        .save()
        .then(() => res.json("productCategory added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  }
