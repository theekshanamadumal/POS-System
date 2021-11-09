
const itAdminRouter = require('./itAdminRoute');
const adminAnalyticsRoute = require('./adminAnalyticsRoute');

module.exports = function (app) {
  
    app.use('/itAdmin',itAdminRouter);
    app.use('/itAdmin', adminAnalyticsRoute);
      
}


// function f1(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     )

// router.use(itAdminRouter);
// router.use(adminAnalyticsRoute);