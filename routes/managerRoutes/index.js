const router = require("express").Router();
const { authJwt } = require("../../middlewares");


const managementRouter = require('./managementRoute');
const productRouter = require('./productRoute');
const productCategoryRouter = require('./productCategoryRoute');
const shopRouter = require('./shopRoute');
const salesRouteRouter = require('./salesRouteRouter');
const locationRouter = require('./locationRoute');
const billRouter = require('./billRoute');
const dailyTaskRouter = require('./dailyTaskRoute');
const analyticsRouter = require('./analyticsRoute');


router.use(  '/management',
    [authJwt.verifyToken, authJwt.isManager],
    function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
 });
  

router.use('/management',managementRouter);
router.use('/management',productRouter);
router.use('/management',productCategoryRouter);
router.use('/management',shopRouter);
router.use('/management',salesRouteRouter);
router.use('/management',locationRouter);
router.use('/management',billRouter);
router.use('/management',dailyTaskRouter);
router.use('/management',analyticsRouter);
  

module.exports = router;


