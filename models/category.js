const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema= new Schema(
  {
    category: {type: String,required: true, unique: true, trim:true }

  },
  { timestamps: true }
);

const Category = mongoose.model('ProductCategories',categorySchema);

module.exports=Category;