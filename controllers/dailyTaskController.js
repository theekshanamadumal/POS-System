const db = require("../models");
const dailyTask = db.dailyTask;
let ShopController = require("../controllers/shopController");
const SC = ShopController;
module.exports =  class dailyTaskController {
  
    // Constructor
    constructor() {
    }

    static alldailyTasks(req,res) {
        const li=new Date().toLocaleDateString().split("/");
        let local;
        if (li[1]>9){
            local=li[2]+"-"+li[0]+"-"+li[1]
        }
        else{
            local=li[2]+"-"+li[0]+"-0"+li[1]
        }
        const lessDate=local+"T00:00:00Z"
        const highDate=local+"T23:59:59Z"
        
        dailyTask.find({createdAt:{
            "$gte":lessDate,
            "$lt":highDate}})
        .populate('sellerId',null,"users")
        .then((dailyTask) =>{ res.json(dailyTask);    
            console.log("dailyTasks :",dailyTask)
        })
        .catch((err) => res.status(400).json("Database Error: try later "));
    
    }


// Static method
    static addNewdailyTask(req,res ) {   
        console.log("again done.......")
        //const dailyShops=SC.allShopRoute(req.body.dailyRoute);
        //console.log("daily shops",dailyShops);

        const sellerId = req.body.sellerId;
        const dailyInventory = req.body.dailyInventory;
        const dailyRoute = req.body.dailyRoute;
        const dailySalesProgression = 0;
        const dailySalesTarget = Number(req.body.dailySalesTarget);
        const dailyShops =req.body.dailyShops;

        
        const newdailyTask = new dailyTask({
            sellerId,
            dailyInventory,
            dailyRoute,
            dailySalesProgression,
            dailySalesTarget,
            dailyShops,
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