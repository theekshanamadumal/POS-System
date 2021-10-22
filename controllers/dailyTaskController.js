const db = require("../models");
const dailyTask = db.dailyTask;

module.exports =  class dailyTaskController {
  
    // Constructor
    constructor() {
    }

    static alldailyTasks(req,res) {
        dailyTask.find()
        .populate('sellerId',null,"users")
        .then((dailyTask) =>{ res.json(dailyTask);    
            console.log("dailyTasks :",dailyTask)
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
    }


// Static method
    static addNewdailyTask(req,res ) {
        const dailyTaskName = req.body.dailyTaskName;
        const owner = req.body.owner;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const city = req.body.city;
        const location = (req.body.location).split(',');
        const route = req.body.route;
        
        const newdailyTask = new dailyTask({
            dailyTaskName,
            owner,
            phoneNo,
            email,
            city,
            route,
            location,

        });
        console.log("dailyTask new:", newdailyTask);
        newdailyTask
            .save()
            .then(() => {
                res.json("dailyTask added!"); 
                console.log("dailyTask added");})
            .catch((err) => {
                res.status(400).json("DataBase Error " +err);
                console.log("dailyTask Error:", err);});
}

    static getdailyTask(req,res ) {
        console.log(req.params.id)
        dailyTask.findById(req.params.id)
        .then((dailyTask) => res.json(dailyTask))
        .catch((err) => res.status(400).json("Error: " + err));
    }
}