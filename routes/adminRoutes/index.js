const router = require("express").Router();
const { authJwt } = require("../../middlewares");



const itAdminRouter = require('./itAdminRoute');
const adminAnalyticsRoute = require('./adminAnalyticsRoute');

    
router.use(  '/itAdmin',
    [authJwt.verifyToken, authJwt.isAdmin],
    function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
 });
  
router.use('/itAdmin', itAdminRouter);
router.use('/itAdmin', adminAnalyticsRoute);
      

module.exports = router;

