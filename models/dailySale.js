const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailySaleSchema= new Schema(
  {
    salesperson: {type: String,required: true, trim:true },
    sale: {type: Number,required: true, trim: true},
    day: {type: String,required: true, trim:true },

    
  },
  { timestamps: true }
);

const DailySale = mongoose.model('dailySale',dailySaleSchema);

module.exports=DailySale;