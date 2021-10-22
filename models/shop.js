const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema= new Schema(
  {
    shopName: {type: String,required: true, trim:true },
    owner: {type: String, trim:true },
    phoneNo: {type: Number,required: true, trim: true},
    email: {type: String, trim: true},
    city: {type: String,required: true, trim:true},
    location: {type: [String] , trim:true},
    route: {type: String, trim:true},

  },
  { timestamps: true }
);

const Shop = mongoose.model('Shops',shopSchema);

module.exports=Shop;