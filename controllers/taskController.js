const db = require("../models");
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('file-system');

const DailyTask = db.dailyTask;
const Payment = db.payment;
const LocationHistory = db.locationHistory;
const endOfDay = require('date-fns/endOfDay');
const startOfDay = require('date-fns/startOfDay');

//Tasks for Salesperson Use Cases

//Return assgined daily task to the salesperson
exports.findTask = async (req, res) => {
    await DailyTask.findOne({
        sellerId: req.body.sellerId
    })
        .populate({
            path: 'sellerId',
            model: "users",
            select: '_id firstName lastName'
        })
        .populate('dailyRoute', 'destinationLocation originLocation origin destination')
        .populate({
            path: 'dailyShops',
            populate: {
                path: 'shopId',
                model: 'Shops'
            }
        })
        .populate({
            path: 'dailyInventory',
            populate: {
                path: 'productId',
                model: 'Product',
                select: '_id itemName unitPrice'
            }
        })
        .exec((err, task) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!task) {
                return res.status(404).send({ message: "Task not found for this ID." });
            }

            res.status(200).send({
                task
            });
        });
};


//Update salespersons' assigned daily task inventory
exports.updateInventory = async (req, res) => {

    itemIndex = req.body.itemIndex;
    value = req.body.quantity;
    query = "dailyInventory." + itemIndex + ".quantity";

    await DailyTask.updateOne({ sellerId: req.body.sellerId }, { [query]: value })
        .exec((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Done" });
        });
};

//Check a shop on salespersons' shop list
exports.checkShop = async (req, res) => {

    shopIndex = req.body.shopIndex;
    value = req.body.isCovered;
    query = "dailyShops." + shopIndex + ".isCovered";

    await DailyTask.updateOne({ sellerId: req.body.sellerId }, { [query]: value })
        .exec((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Done" });
        });
};

//Update salespersons' assigned daily task sales progression
exports.updateSalesProgress = async (req, res) => {
    
    value = req.body.dailySalesProgression;
    query = "dailySalesProgression";

    await DailyTask.updateOne({ sellerId: req.body.sellerId }, { [query]: value })
        .exec((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Done" });
        });
};

//Add new payment and email invoice to the customer with digital payment methoed
exports.addPayment = async (req, res) => {

    listString = req.body.transactions;
    list = JSON.parse(listString);

    const newPayment = new Payment({
        sellerId: req.body.sellerId,
        shopId: req.body.shopId,
        total: req.body.total,
        dateTime: req.body.dateTime,
        transactions: list,
        isOnline: req.body.isOnline
    });

    await newPayment.save(function (err, payment) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        var paymentId = payment._id;
        if (req.body.isOnline === "true") {
            Payment.findOne({
                _id: paymentId,

            })
            .populate('shopId', 'shopName')
            .populate({
                path: 'transactions',
                populate: {
                    path: 'id',
                    model: 'Product',
                    select: '_id itemName unitPrice'
                }
            })
            .exec((err, payment) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!payment) {
                    return res.status(404).send();
                }
                var transactions = payment.transactions;
                var sellerId = req.body.sellerId;
                var total = req.body.total;
                var dateTime = req.body.dateTime;
                var isOnline = req.body.isOnline;
                //Send Email and the invoice to the customer if transaction was online

                const transporter = nodemailer.createTransport({
                    port: 465,               // true for 465, false for other ports
                    host: "smtp.gmail.com",
                    auth: {
                        user: 'sahan.samarakoon.4@gmail.com',
                        pass: 'otjlfrdcnpheyqnm',// Setup Google App password for the sender's Google account
                    },
                    secure: true,
                });

                var template = fs.readFileSync('invoice.ejs', { encoding: 'utf-8' });
                var htmlTest = ejs.render(template, { invoiceId: paymentId, dateTime: dateTime, transactions: transactions, total: total, isOnline: isOnline, sellerId: sellerId });

                const mailData = {
                    from: 'sahan.samarakoon.4@gmail.com',  // sender address
                    to: 'xprnypnblck@gmail.com',   // list of receivers
                    subject: 'Smart POS - Online Invoice',
                    text: 'This is the invoice',
                    html: htmlTest
                };
                transporter.sendMail(mailData, function (err, info) {
                    if (err)
                        console.log(err);
                    else
                        console.log(info);
                });
            });
        }

        res.status(200).send({ message: "Done" });
    });
};


//Get payments for a salesperson on current day
exports.payments = async (req, res) => {

    await Payment.find({
        sellerId: req.body.sellerId,
        dateTime: {
            $gte: startOfDay(new Date()),
            $lte: endOfDay(new Date())
        }
    })
        .populate('shopId', 'shopName')
        .populate({
            path: 'transactions',
            populate: {
                path: 'id',
                model: 'Product',
                select: '_id itemName unitPrice'
            }
        })
        .exec((err, payment) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!payment) {
                return res.status(404).send();
            }
            res.status(200).send(payment);
        });
};


//Update the salesperson location data
exports.updateLocation = async (req, res) => {

    listString = req.body.position;
    list = JSON.parse(listString);

    var data = {
        sellerId: req.body.sellerId,
        location: list,
        dateTime: req.body.dateTime
    }

    await LocationHistory.findOneAndUpdate({
        sellerId: req.body.sellerId,
    }, data, { upsert: true }).exec(function (err) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        return res.status(200).send("Done");
    })
};