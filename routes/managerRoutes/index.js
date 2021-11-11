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


router.use(  'api/management',
    [authJwt.verifyToken, authJwt.isManager],
    function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
 });
  

router.use('api/management',managementRouter);
router.use('api/management',productRouter);
router.use('api/management',productCategoryRouter);
router.use('api/management',shopRouter);
router.use('api/management',salesRouteRouter);
router.use('api/management',locationRouter);
router.use('api/management',billRouter);
router.use('api/management',dailyTaskRouter);
router.use('api/management',analyticsRouter);
  

module.exports = router;


