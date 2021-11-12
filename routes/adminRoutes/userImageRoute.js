const router = require("express").Router();
//let Shop = require("../models/shop");
//const { authJwt } = require("../../middlewares");
let AnalyticsController = require("../../controllers/adminAnalyticsController");
//const AC = AnalyticsController;


router.route("/userImage").get( (req, res) => {
    // Check if file
    // Check if image
      // Read output to browser
      const filepath = './uploads/'+ req.body.idNumber;
      res.sendFile(filepath);
    
});



module.exports = router;