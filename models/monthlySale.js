const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthlySaleSchema= new Schema(
  {
    salesperson: {type: String,required: true, trim:true },
    sale: {type: Number,required: true, trim: true},
    month: {type: String,required: true, trim:true },

    
  },
  { timestamps: true }
);

const MonthlySale = mongoose.model('monthlySale',monthlySaleSchema);

module.exports=MonthlySale;