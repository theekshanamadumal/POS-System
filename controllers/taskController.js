const db = require("../models");
const nodemailer = require('nodemailer');
const DailyTask = db.task;
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
            model: "User",
            select: '_id username'
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

    await newPayment.save(function (err) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        //Send Email and the invoice to the customer if transaction was online
        if (req.body.isOnline == true) {
            var sellerId = req.body.sellerId;
            var shopId = req.body.shopId;
            var total = req.body.total;
            var dateTime = req.body.dateTime;
            const transporter = nodemailer.createTransport({
                port: 465,               // true for 465, false for other ports
                host: "smtp.gmail.com",
                auth: {
                    user: 'sahan.samarakoon.4@gmail.com',
                    pass: '',// Setup Google App password for the sender's Google account
                },
                secure: true,
            });
            var link = '<form action="https://sandbox.payhere.lk/pay/checkout?merchant_id=1218725&return_url=http://google.com/return&cancel_url=http://google.com/cancel&notify_url=http://google.com/notify&first_name=Theekshana&last_name=Madumal&email=xprnypnblck@gmail.com&phone=0722403591&address=No:1,Galle Road&city=Colombo&country=Sri Lanka&order_id=Invoice : 8&items=Inovice for 09/27&currency=LKR&amount=' + total + '" method="post">';
            htmlButton = link + '<input type="submit" name="Pay" value="Pay"/></form>';

            const mailData = {
                from: 'sahan.samarakoon.4@gmail.com',  // sender address
                to: 'xprnypnblck@gmail.com',   // list of receivers
                subject: 'Online Payment ',
                text: 'This is the invoice',
                html: htmlButton
            };

            transporter.sendMail(mailData, function (err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);
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

            var paymentInfo = {
                id: payment["_id"],

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