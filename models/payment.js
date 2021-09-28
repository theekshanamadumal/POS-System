const mongoose = require("mongoose");

const Payment = mongoose.model(
    "Payment",
    new mongoose.Schema({
        sellerId: String,
        shopId: String,
        total: Number,
        dateTime: Date,
        transactions: [{
            _id: false,
            id: { type: String },
            quantity: { type: Number },
        }],
        isOnline:Boolean

    })
);

module.exports = Payment;