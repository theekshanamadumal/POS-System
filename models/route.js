const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routeSchema= new Schema(
  {
    origin: {type: String,required: true, trim:true },
    originLocation: {type:  [Number], trim:true },
    destination: {type: String, trim:true },
    destinationLocation: {type:  [Number], trim:true },
    cities: {type: [String],trim: true},
  },
  { timestamps: true }
);

const SalesRoute = mongoose.model('routes',routeSchema);

module.exports=SalesRoute;