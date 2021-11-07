const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logHistorySchema= new Schema(
  {
    userID: {type: mongoose.Schema.ObjectId,ref: "users",required: true },
    dateTime: Date,

  }
);

const logHistory = mongoose.model('logHistory',logHistorySchema);

module.exports=logHistory;