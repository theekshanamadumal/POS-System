const mongoose = require("mongoose");

const Payment = mongoose.model(
    "Payment",
    new mongoose.Schema({
        sellerId: String,
        shopId: {
            type: mongoose.Schema.ObjectId,
            ref: "Shops"
        },
        total: Number,
        dateTime: Date,
        transactions: [{
            _id: false,
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "Product"
            },
            quantity: { type: Number },
        }],
        isOnline:Boolean

    })
);

module.exports = Payment;