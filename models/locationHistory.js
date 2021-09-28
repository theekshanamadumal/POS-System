const mongoose = require("mongoose");

const LocationHistory = mongoose.model(
    "LocationHistory",
    new mongoose.Schema({
        sellerId: String,
        location:[Number],
        dateTime: Date,

    })
);

module.exports = LocationHistory;