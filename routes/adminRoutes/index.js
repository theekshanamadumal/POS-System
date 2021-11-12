const router = require("express").Router();
const { authJwt } = require("../../middlewares");



const itAdminRouter = require('./itAdminRoute');
const adminAnalyticsRoute = require('./adminAnalyticsRoute');
const userImageRoute = require('./userImageRoute');

    
router.use(  '/api/itAdmin',
    [authJwt.verifyToken, authJwt.isAdmin],
    function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
 });
  
router.use('/api/itAdmin', itAdminRouter);
router.use('/api/itAdmin', adminAnalyticsRoute);
router.use('/apii/itAdmin', userImageRoute);
      

module.exports = router;

