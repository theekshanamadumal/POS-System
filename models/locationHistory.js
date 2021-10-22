const mongoose = require("mongoose");

const LocationHistory = mongoose.model(
    "LocationHistory",
    new mongoose.Schema({
        sellerId: {type: mongoose.Schema.ObjectId,ref:'users',required: true},
        location:[Number],
        dateTime: Date,

    })
);

module.exports = LocationHistory;