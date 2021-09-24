const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema= new Schema(
  {
    itemName: {type: String,required: true, trim:true },
    category: {type: String,required: true, trim:true },
    unitPrice: {type: Number,required: true, trim: true},
    stock: {type: Number,required: true, trim: true},
    description: {type: String, trim:true},
  },
  { timestamps: true }
);

const Product = mongoose.model('Product',productSchema);

module.exports=Product;