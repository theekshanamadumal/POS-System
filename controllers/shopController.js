const { json } = require("body-parser");
const db = require("../models");
const Shop = db.shop;

module.exports =  class ShopController {
  
    // Constructor
    constructor() {
    }
    /*static loadShops(req,res){
        axios.get(URL.main+URL.shops+"/getRoutes/"+this.state.dailyRoute)
            .then((res) => {
                this.setState({shopsId:res.data});
                console.log(res.data,"response&&&&&&&&&&");
                this.state.shopsId.map(e=>{
                    console.log(typeof e,"type.....");
                    e.isCovered=false;
                })
                
                console.log("routes******",this.state.shopsId);
            }).catch((error) => {
                console.log(error);
                alert(error, (window.location = URL.tasks));
        });
    }*/

    static groupByRoutes(req,res){
        console.log("requested for group by routes..")
        Shop.aggregate([
            //{"$group" : {_id:"route", count:{$sum:"$stock"}}}])
            {$group: {
                "_id": "$route",
                //"status": { "$addToSet": "false" },
                "shopsName": {
                    $push: "$shopName"
                },
                "shopsID": {
                    $push: "$_id"
                },
                "count": {
                    $sum: 1
                }
                }
            },
            
        ])
        .then((total) => {console.log(total);
            res.json(total)})
        .catch((err) => res.status(400).json("Error: " + err));
        return this.res;
    }

    static allShops(req,res) {
        Shop.find()
        .then((shop) =>{ res.json(shop);    
            console.log("shops :",shop)
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    }
    static countShops(req,res) {
        Shop.countDocuments({})
        .then((shop) =>{ res.json(shop);    
            console.log("shops count :",shop)
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    }
    
    static allShopRoute(req,res) {
        console.log("requsted for dailyRoute id......")
        Shop.find({route:req.params.dailyRoute})
        .select("_id")
        .then((shop) =>{ 
            shop.map(e=>e.isCovered=false)
            console.log("shops :",shop)
            res.json(shop);    
            //console.log("shops :",shop)
        })
        .catch((err) => {res.status(400).json("Database Error: try later ");
        console.log("error found..........")});
    
    }


// Static method
    static addNewShop(req,res ) {
        const shopName = req.body.shopName;
        const owner = req.body.owner;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const city = req.body.city;
        const location = (req.body.location).split(',');
        const route = req.body.route;
        
        const newShop = new Shop({
            shopName,
            owner,
            phoneNo,
            email,
            city,
            route,
            location,

        });
        console.log("shop new:", newShop);
        newShop
            .save()
            .then(() => {
                res.json("shop added!"); 
                console.log("shop added");})
            .catch((err) => {
                res.status(400).json("DataBase Error " +err);
                console.log("shop Error:", err);});
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
        console.log("..........shop update recieved");
        Shop.findById(req.params.id)
    .then((shop) => {
     
        shop.shopName = req.body.shopName;
        shop.owner = req.body.owner;
        shop.phoneNo = Number(req.body.phoneNo);
        shop.email = req.body.email;
        shop.city = req.body.city;
        shop.location =(req.body.location).split(",");
        shop.route = req.body.route;
  
      shop
        .save()
        .then(() => {res.json("shop updated!");
        console.log("..........shop updated..............");})
        .catch((err) => {res.status(400).json("Error: " + err);
        console.log("..........shop update error:", err);});
    })
    .catch((err) => {res.status(400).json("Error: " + err);
    console.log("..........shop find error:", err);});
        }
}