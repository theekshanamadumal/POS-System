const db = require("../models");
const SalesRoute = db.route;

module.exports =  class RouteController {
  
    // Constructor
    constructor() {
    }

    static allRoutes(req,res) {
        SalesRoute.find()
        .then((salesRoute) => res.json(salesRoute))
        .catch((err) => res.status(400).json("Error: " + err));
    }


// Static method
    static addNewRoute(req,res ) {
        const origin = req.body.origin;
        const originLocation = req.body.originLocation;
        const destination = req.body.destination;
        const destinationLocation = req.body.destinationLocation;
        const cities = ( req.body.cities).split(",");
          
          const newSalesRoute = new SalesRoute({
            origin,
            originLocation,
            destination,
            destinationLocation,
            cities,
            
          });
        console.log("Route new:", newSalesRoute);
        newSalesRoute
            .save()
            .then(() => {
                res.json("Route added!"); 
                console.log("Route added");})
            .catch((err) => {
                res.status(400).json("DataBase Error " +err);
                console.log("Route Error:", err);});
}

    static getRoute(req,res ) {
        console.log(req.params.id)
        SalesRoute.findById(req.params.id)
        .then((salesRoute) => res.json(salesRoute))
        .catch((err) => res.status(400).json("Error: " + err));
    }

    static deleteRoute(req,res ) {
        console.log(req.params.id)
        SalesRoute.findByIdAndDelete(req.params.id)
        .then(() => res.json("SalesRoute deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    static updateRoute(req,res ) {
        SalesRoute.findById(req.params.id)
        .then((salesRoute) => {
         
        salesRoute.origin = req.body.origin;
        salesRoute.originLocation = req.body.originLocation;
        salesRoute.destination = req.body.destination;
        salesRoute.destinationLocation = req.body.destinationLocation;
        salesRoute.cities = ( req.body.cities).split(",");
      
          salesRoute
            .save()
            .then(() => res.json("SalesRoute updated!"))
            .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
}