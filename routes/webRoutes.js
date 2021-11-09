//const router = require("express").Router();


const adminRoutes = require('./adminRoutes');
const managerRoutes = require('./managerRoutes');


//router.use('/itAdmin', adminRoutes);
//router.use('/management', managerRoutes);

//

module.exports = function (app) {
  
app.use('/itAdmin', adminRoutes);
app.use('/management', managerRoutes);
  
}
//app.use( adminRoutes);
//app.use( managerRoutes);



