const { json } = require("body-parser");
const db = require("../models");
const User = db.user;
const LogHistory = db.logHistory;

module.exports =  class adminAnalyticsController {
  
    // Constructor
    constructor() {
    }
    
    static signins(req,res){
       console.log("requested for signins analytics by routes...........");
       LogHistory.find()
       .populate('userID')
       //.populate('userID[roles]')
       //.select((' dateTime '))
       //.select(('dateTime userID.roles userID.firstName userID.lastName userID.firstName userID.idNumber'))
       .then((Signin) =>{     
           console.log("Signins :",Signin);
           

           res.json(Signin);
       })
       .catch((err) => res.status(400).json("Database Error: try later "));
   
    }
    static signups(req,res){
        console.log("requested for Signups analytics by routes........");
        User.find()
        .populate('roles')
        .select(('idNumber firstName lastName createdAt roles'))
        .then((Signup) =>{     
            console.log("Signups :",Signup);
            res.json(Signup);
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
     }
     
}