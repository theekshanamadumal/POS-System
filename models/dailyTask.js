const mongoose = require("mongoose");

const DailyTask = mongoose.model(
    "DailyTask",
    new mongoose.Schema({
        sellerId: String,
        dailyInventory: {
            type: [new mongoose.Schema({
                _id: false,
                productId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product"
                },
                quantity: { type: Number },
            })]
        },
        dailyRoute: {
            type: mongoose.Schema.ObjectId,
            ref: "routes"
        },
        dailySalesProgression: Number,
        dailySalesTarget: Number,
        dailyShops: {
            type: [new mongoose.Schema({
                _id: false,
                isCovered: { type: Boolean },
                shopId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Shops"
                }
            })]
        },
        
    })
);

module.exports = DailyTask;