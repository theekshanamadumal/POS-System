const { json } = require("body-parser");
const { product } = require("../models");
const db = require("../models");
const Payment = db.payment;

module.exports =  class analyticsController {
  
    // Constructor
    constructor() {
    }
    static findMonth(mon){
        if (mon<10){
            return "0"+mon
        }return mon
    }
    static findStartEnd(month){
        const currentMonth=new Date().getMonth()+1;
        var yearM=""
        if (currentMonth>=month && month!=12){
            yearM=new Date().getFullYear();
        }else if (month!=12){
            console.log("first...")
            yearM=new Date().getFullYear()-1;
        }var m=this.findMonth(month);
        const endM=this.findMonth(parseInt(m)+1);
        let startDay="";
        let endDay="";
        if (month==12 && currentMonth!=12){
            startDay=new Date().getFullYear()-1+"-12-01T00:00:00Z"
            endDay=new Date().getFullYear()+"-"+"01-01T00:00:00Z"
        }else if (month==12 ){
            startDay=new Date().getFullYear()+"-12-01T00:00:00Z"
            endDay=new Date().getFullYear()+1+"-"+"01-01T00:00:00Z"
        }else{
            startDay=yearM+"-"+m+"-01T00:00:00Z"
            endDay=yearM+"-"+endM+"-01T00:00:00Z"
        }  return [startDay,endDay]

    }

    
    /*static categoryAnalytics(req,res){
       console.log("requested for category analytics by routes..");
       Payment.find()
       .populate('transactions.id')
       .select(('transactions  dateTime -_id'))
       .then((Payment) =>{     
           console.log("Payments :",Payment);

           res.json(Payment);
       })
       .catch((err) => res.status(400).json("Database Error: try later "));
   
    }*/

    static categoryAnalyticsDuration(req,res){
        console.log("requested for category analytics by routes..");
        const duration=req.params.duration;
         const type=duration.split("-")[0];
         var startDay="";
         var endDay="";
         if (type==="Year"){
             const y=duration.split("-")[1];
             const y1=parseInt(y)+1
             startDay=y+"-01-01T00:00:00Z"
             endDay=y1+"-01-01T00:00:00Z"
         }
         else if (type==="Day"){
            var lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() -6);
            startDay=lastWeek;
            endDay=new Date();
         }else if (type==="Month"){
            const month=duration.split("-")[1];
            [startDay,endDay]=this.findStartEnd(month);
        }    
        Payment.aggregate([
            { 
                $match : {dateTime:{$gte:new Date(startDay), $lte:new Date(endDay)} }
            },
            { $lookup:{
                from: "products",
                localField: "transactions.id",
                foreignField: "_id",
                as: "product"
            }},
            {$unwind: {
                path: '$product',
            }},
            {$unwind: {
                path: '$transactions',
            }},
            {$project: {
                product: 1,
                transactions: 1,
                compare: {
                    $cmp: ['$product._id', '$transactions.id']
                }}
            },
            {$match: {
                compare: 0
            }},
            { $project: {  
                cat:"$product.category",stotal: { $multiply: [ "$transactions.quantity", "$product.unitPrice" ] } } 
            },
            {$group: {
                _id: "$cat", 
                cTotal:{$sum:"$stotal"},
            }},
            { "$sort": { "cTotal": -1 } }               
        ]).then((Payment) =>{     
            console.log("Payments :",Payment);
            res.json(Payment);
        })
        .catch((err) => res.status(400).json("Database Error: try later "));

        
    
     }
     static salesAnalyticsDuration(req,res){
         const duration=req.params.duration;
         const type=duration.split("-")[0];
         if (type==="Year"){
             const y=duration.split("-")[1];
             const y1=parseInt(y)+1
             const start=y+"-01-01T00:00:00Z"
             const end=y1+"-01-01T00:00:00Z"
            Payment.aggregate([
                { $match: { dateTime :{$gte:new Date(start), $lte:new Date(end)} }},
                {$group: {
                    _id: {$month: "$dateTime" }, 
                    total: {$sum: "$total"} ,
                    
                }}, 
                { "$sort": { "_id": 1 } }                         
            ]).then((Payment) =>{     
                console.log("Payments :",Payment);
                res.json(Payment);
            })
            .catch((err) => res.status(400).json("Database Error: try later "));
         }
         else if (type==="Day"){
            var lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() -6);
            const startDay=lastWeek;
            const endDay=new Date();
            Payment.aggregate([
                { 
                    $match : {dateTime:{ $gte:startDay}}
                },
                {$group: {
                    _id: {$dayOfMonth: "$dateTime" },  
                    total: {$sum: "$total"} ,
                }},
                { "$sort": { "_id": 1 } }                        
            ]).then((Payment) =>{     
                console.log("Payments :",Payment);
                res.json(Payment);
            })
            .catch((err) => res.status(400).json("Database Error: try later "));


         }else if (type==="Month"){
            const month=duration.split("-")[1];
            const [startDay,endDay]=this.findStartEnd(month);
            
            Payment.aggregate([
                { $match: { dateTime :{$gte:new Date(startDay), $lte:new Date(endDay)} }},
                 
                {$group: {
                    _id: {$dayOfMonth: "$dateTime" },  
                    total: {$sum: "$total"} ,
                    
                }}, 
                { "$sort": { "_id": 1 } }               
            ]).then((Payment) =>{     
                console.log("Payments ...:",Payment);
                res.json(Payment);
            })
            .catch((err) => res.status(400).json("Database Error: try later "));   
        }       
    
     }
     static sellersAnalyticsDuration(req,res){
        const duration=req.params.duration;
        const type=duration.split("-")[0];
        console.log(type)
        if (type==="Year"){
            const y=duration.split("-")[1];
            const y1=parseInt(y)+1
            const start=y+"-01-01T00:00:00Z"
            const end=y1+"-01-01T00:00:00Z"
           Payment.aggregate([
               { $match: { dateTime :{$gte:new Date(start), $lte:new Date(end)} }},
               {$group: {
                   _id: "$sellerId", 
                   total: {$sum: "$total"} ,
                   
               }},
               { $lookup:{
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "seller"
                }},
               { "$sort": { "total": -1 } }                         
           ]).then((Payment) =>{     
               console.log("Payments :",Payment);
               res.json(Payment);
           })
           .catch((err) => res.status(400).json("Database Error: try later "));
        }
        else if (type==="Day"){
           var lastWeek = new Date();
           lastWeek.setDate(lastWeek.getDate() -6);
           const startDay=lastWeek;
           const endDay=new Date();
           Payment.aggregate([
               { 
                   $match : {dateTime:{ $gte:startDay}}
               },
               {$group: {
                    _id: "$sellerId", 
                   total: {$sum: "$total"} ,
               }},{$lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "seller"
                } },
                { "$sort": { "total": -1 } }                        
           ])
           .then((Payment) =>{     
               console.log("Payments :",Payment);
               res.json(Payment);
           })
           .catch((err) => res.status(400).json("Database Error: try later "));


        }else if (type==="Month"){
           const month=duration.split("-")[1];
           const [startDay,endDay]=this.findStartEnd(month);

           Payment.aggregate([
               { $match: { dateTime :{$gte:new Date(startDay), $lte:new Date(endDay)} }},
               {$group: {
                    _id: "$sellerId", 
                   total: {$sum: "$total"} ,
               }},
               {$lookup:{
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "seller"
                } },
               { "$sort": { "total": -1 } }           
           ]).then((Payment) =>{     
               console.log("Payments ...:",Payment);
               res.json(Payment);
           })
           .catch((err) => res.status(400).json("Database Error: try later "));   
       }       
     }
}