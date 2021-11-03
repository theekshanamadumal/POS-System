const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/authController");


//Authetication RESTful APIs
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    //console.log("signup..."),
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.get('/api/auth/signout',controller.signout );
};