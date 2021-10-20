const db = require("../models");
const Payment = db.payment;

module.exports =  class billController {
  
    // Constructor
    constructor() {
    }

    static userBill(req,res) {

        console.log("seller id:",req.params.id);

        
        Payment.findById(req.params.id)
        .populate('sellerId',null,"users")
        .populate('shopId',"shopName","Shops")
        .populate('transactions.id',null,"Product")
        .then((payment) =>{ res.json(payment);    
            console.log("---------------invoices list -----------:",payment)
        })
        .catch((err) => res.status(500).json("Database Error: try later "));

    
    }
    static allBills(req,res) {
        Payment.find()
        .populate('shopId',"shopName","Shops")
        .then((payment) =>{ res.json(payment);    
            console.log("allBills :",payment)
        })
        .catch((err) => res.status(500).json("Database Error: try later "));
    
    }
}