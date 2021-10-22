const db = require("../models");
const GPS = db.locationHistory;

module.exports =  class LocationController {
  
    // Constructor
    constructor() {
    }

    static userLocation(req,res) {

        console.log("seller id:",req.params.id);

        
        GPS.findOne({sellerId:req.params.id})
        .populate('sellerId')
        .then((gps) =>{ res.json(gps);    
            console.log("---------------gps single seller -----------:",gps)
        })
        .catch((err) => res.status(500).json("Database Error: try later "));

    
    }
    static allLocations(req,res) {
        GPS.find()
        .populate('sellerId')
        .then((gps) =>{ res.json(gps);    
            console.log("gps :",gps)
        })
        .catch((err) => res.status(500).json("Database Error: try later "));
    
    }
}