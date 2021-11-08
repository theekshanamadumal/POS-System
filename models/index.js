const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.category = require("./category");
db.dailyTask = require("./dailyTask");
db.locationHistory = require("./locationHistory");
db.payment = require("./payment");
db.product = require("./product");
db.role = require("./role");
db.route = require("./route"); 
db.shop = require("./shop");
db.user = require("./user");
db.logHistory = require("./userLog");

db.ROLES = ["admin", "manager", "salesperson"];

module.exports = db;