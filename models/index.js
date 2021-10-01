const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.category = require("./category");
db.category = require("./dailyTask");
db.locationHistory = require("./locationHistory");
db.payment = require("./payment");
db.category = require("./product");
db.role = require("./role");
db.category = require("./route"); 
db.category = require("./shop");
db.user = require("./user");

db.ROLES = ["admin", "manager", "salesperson"];

module.exports = db;