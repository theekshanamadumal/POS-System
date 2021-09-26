const router = require("express").Router();
let Shop = require("../models/shop");


router.route("/shops").get((req, res) => {
    Shop.find()
    .then((shop) =>{ res.json(shop);    
        console.log("shops :",shop)
    })
    .catch((err) => res.status(400).json("Database Error: try later "));
});

router.route("/addShop").post((req, res) => {
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
});

router.route("/shop/:id").get((req, res) => {
    console.log(req.params.id)
    Shop.findById(req.params.id)
    .then((shop) => res.json(shop))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/shop/:id").delete((req, res) => {
  console.log(req.params.id)
    Shop.findByIdAndDelete(req.params.id)
    .then(() => res.json("shop deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateShop/:id").post((req, res) => {
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
});

module.exports = router;
