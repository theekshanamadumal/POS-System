const router = require("express").Router();
let SalesRoute = require("../models/route");


router.route("/salesRoutes").get((req, res) => {
    SalesRoute.find()
    .then((salesRoute) => res.json(salesRoute))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addSalesRoute").post((req, res) => {
const origin = req.body.origin;
const destination = req.body.destination;
const cities = ( req.body.cities).split(",");
  
  const newSalesRoute = new SalesRoute({
    origin,
    destination,
    cities,
    
  });

  newSalesRoute
    .save()
    .then(() => res.json("SalesRoute added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/salesRoute/:id").get((req, res) => {
    console.log(req.params.id)
    SalesRoute.findById(req.params.id)
    .then((salesRoute) => res.json(salesRoute))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/salesRoute/:id").delete((req, res) => {
  console.log(req.params.id)
    SalesRoute.findByIdAndDelete(req.params.id)
    .then(() => res.json("SalesRoute deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateSalesRoute/:id").post((req, res) => {
    SalesRoute.findById(req.params.id)
    .then((SalesRoute) => {
     
    salesRoute.origin = req.body.origin;
    salesRoute.destination = req.body.destination;
    salesRoute.cities = ( req.body.cities).split(",");
  
      salesRoute
        .save()
        .then(() => res.json("SalesRoute updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
