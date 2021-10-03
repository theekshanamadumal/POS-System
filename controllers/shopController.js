const db = require("../models");
const Shop = db.shop;

module.exports =  class ShopController {
  
    // Constructor
    constructor() {
    }

    static allShops(req,res) {
        Shop.find()
        .then((shop) =>{ res.json(shop);    
            console.log("shops :",shop)
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
    }


// Static method
    static addNewShop(req,res ) {
        const shopName = req.body.shopName;
        const owner = req.body.owner;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const city = req.body.city;
        const route = req.body.route;
        
        const newShop = new Shop({
            shopName,
            owner,
            phoneNo,
            email,
            city,
            route,
        });

        newShop
            .save()
            .then(() => res.json("shop added!"))
            .catch((err) => res.status(400).json("DataBase Error " +err));
}

    static getShop(req,res ) {
        console.log(req.params.id)
        Shop.findById(req.params.id)
        .then((shop) => res.json(shop))
        .catch((err) => res.status(400).json("Error: " + err));
    }

    static deleteShop(req,res ) {
        console.log(req.params.id)
        Shop.findByIdAndDelete(req.params.id)
        .then(() => res.json("shop deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    static updateShop(req,res ) {
        Shop.findById(req.params.id)
    .then((shop) => {
     
        shop.shopName = req.body.shopName;
        shop.owner = req.body.owner;
        shop.phoneNo = Number(req.body.phoneNo);
        shop.email = req.body.email;
        shop.city = req.body.city;
        shop.route = req.body.route;
  
      shop
        .save()
        .then(() => res.json("shop updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
        }
}