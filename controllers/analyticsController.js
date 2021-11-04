const { json } = require("body-parser");
const db = require("../models");
const Payment = db.payment;

module.exports =  class analyticsController {
  
    // Constructor
    constructor() {
    }
    
    static categoryAnalytics(req,res){
       console.log("requested for category analytics by routes..");
       Payment.find()
       .populate('transactions.id')
       .then((Payment) =>{     
           console.log("Payments :",Payment);

           res.json(Payment);
       })
       .catch((err) => res.status(400).json("Database Error: try later "));
   
    }
    static salesAnalytics(req,res){
        console.log("requested for category analytics by routes..");
        Payment.find()
        .populate('transactions.id')
        .then((Payment) =>{     
            console.log("Payments :",Payment);
 
            res.json(Payment);
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
     }
     static sellersAnalytics(req,res){
        console.log("requested for category analytics by routes..");
        Payment.find()
        .populate('transactions.id')
        .then((Payment) =>{     
            console.log("Payments :",Payment);
 
            res.json(Payment);
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
     }
}