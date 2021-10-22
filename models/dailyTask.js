const mongoose = require("mongoose");

const DailyTask = mongoose.model(
    "DailyTask",
    new mongoose.Schema({
        sellerId: String,
        dailyInventory: {
            type: [new mongoose.Schema({
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
                isCovered: { type: Boolean },
                shopId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Shops"
                }
            })]
        },
        name: String,
    })
);

module.exports = DailyTask;