const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logHistorySchema= new Schema(
  {
    useID: {type: mongoose.Schema.ObjectId,ref: "Product",required: true },
    dateTime: Date,

  }
);

const logHistory = mongoose.model('logHistory',logHistorySchema);

module.exports=logHistory;