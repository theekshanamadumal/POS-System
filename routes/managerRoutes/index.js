//const router = require("express").Router();


const managementRouter = require('./managementRoute');
const productRouter = require('./productRoute');
const productCategoryRouter = require('./productCategoryRoute');
const shopRouter = require('./shopRoute');
const salesRouteRouter = require('./salesRouteRouter');
const locationRouter = require('./locationRoute');
const billRouter = require('./billRoute');
const dailyTaskRouter = require('./dailyTaskRoute');
const analyticsRouter = require('./analyticsRoute');


module.exports = function (app) {
  
    app.use('/management',managementRouter);
    app.use('/management',productRouter);
    app.use('/management',productCategoryRouter);
    app.use('/management',shopRouter);
    app.use('/management',salesRouteRouter);
    app.use('/management',locationRouter);
    app.use('/management',billRouter);
    app.use('/management',dailyTaskRouter);
    app.use('/management',analyticsRouter);
}


// router.use(managementRouter);
// router.use(productRouter);
// router.use(productCategoryRouter);
// router.use(shopRouter);
// router.use(salesRouteRouter);
// router.use(locationRouter);
// router.use(billRouter);
// router.use(dailyTaskRouter);
// router.use(analyticsRouter);

