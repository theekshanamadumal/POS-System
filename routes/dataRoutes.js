const { authJwt } = require("../middlewares");
const controller = require("../controllers/taskController");

//Salesperson RESTful APIs

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //Return dailytask for a salesperson
    app.post(
        "/api/task/salesperson",
        authJwt.verifyToken,
        controller.findTask
    );

    //Updating dailytask inventory for a salesperson
    app.patch(
        "/api/task/salesperson/updateInventory",
        authJwt.verifyToken,
        controller.updateInventory
    );

    //Checking shop in the dailytask shoplist for a salesperson
    app.patch(
        "/api/task/salesperson/checkShop",
        authJwt.verifyToken,
        controller.checkShop
    );

    //Updating dailytask salesprogress for a salesperson
    app.patch(
        "/api/task/salesperson/updateSalesProgress",
        authJwt.verifyToken,
        controller.updateSalesProgress
    );

    //Updating location of a salesperson
    app.patch(
        "/api/task/salesperson/updateLocation",
        authJwt.verifyToken,
        controller.updateLocation
    );

    //Make new payment
    app.post(
        "/api/task/salesperson/addPayment",
        authJwt.verifyToken,
        controller.addPayment
    );

    //Returns payments made thriugh out the day for a salesperson
    app.post(
        "/api/task/payments",
        authJwt.verifyToken,
        controller.payments
    );

};



