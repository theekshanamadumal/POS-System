const db = require("../models");
const nodemailer = require('nodemailer');
const DailyTask = db.task;
const Payment = db.payment;
const LocationHistory = db.locationHistory;
const endOfDay = require('date-fns/endOfDay');
const startOfDay = require('date-fns/startOfDay');

exports.findTask = async (req, res) => {
    await DailyTask.findOne({
        sellerId: req.body.sellerId
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

exports.updateInventory = async (req, res) => {

    itemId = req.body.itemId;
    value = req.body.quantity;
    query = "dailyInventory." + itemId + ".quantity";

    await DailyTask.updateOne({ sellerId: req.body.sellerId }, { [query]: value })
        .exec((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Done" });
        });
};

exports.checkShop = async (req, res) => {

    shopId = req.body.shopId;
    value = req.body.isCovered;
    query = "dailyShops." + shopId + ".isCovered";

    await DailyTask.updateOne({ sellerId: req.body.sellerId }, { [query]: value })
        .exec((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Done" });
        });
};
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

exports.addPayment = async (req, res) => {

    listString = req.body.transactions;
    list = JSON.parse(listString);
    console.log(list);



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

        if (req.body.isOnline) {
            var sellerId = req.body.sellerId;
            var shopId = req.body.shopId;
            var total = req.body.total;
            var dateTime = req.body.dateTime;
            const transporter = nodemailer.createTransport({
                port: 465,               // true for 465, false for other ports
                host: "smtp.gmail.com",
                auth: {
                    user: 'sahan.samarakoon.4@gmail.com',
                    pass: 'hkbpncwvgajuzmqn',
                },
                secure: true,
            });
            var link = '<form action="https://sandbox.payhere.lk/pay/checkout?merchant_id=1218725&return_url=http://google.com/return&cancel_url=http://google.com/cancel&notify_url=http://google.com/notify&first_name=Theekshana&last_name=Madumal&email=xprnypnblck@gmail.com&phone=0722403591&address=No:1,Galle Road&city=Colombo&country=Sri Lanka&order_id=Invoice : 8&items=Inovice for 09/27&currency=LKR&amount=' + total + '" method="post">';
            htmlButton = link + '<input type="submit" name="Pay" value="Pay"/></form>';

            const mailData = {
                from: 'sahan.18@cse.mrt.ac.lk',  // sender address
                to: 'xprnypnblck@gmail.com',   // list of receivers
                subject: 'Online Payment ',
                text: 'This is the invoice invoice',
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

exports.payments = async (req, res) => {

    console.log(startOfDay(new Date()));
    console.log(endOfDay(new Date()));
    // console.log(new Date("2021-09-27T13:50:27.681+00:00"));

    await Payment.find({
        sellerId: req.body.sellerId,
        // dateTime:new Date("2021-09-27T13:50:27.681+00:00"),
        dateTime: {
            $gte: endOfDay(new Date(2021, 08, 26)),
            $lte: endOfDay(new Date(2021, 08, 28))
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

exports.updateLocation = async (req, res) => {
    await LocationHistory.findOneAndUpdate({
        sellerId: req.body.sellerId,
    }, req.body, { upsert: true }).exec(function (err) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        return res.status(200).send("Done");
    })
};