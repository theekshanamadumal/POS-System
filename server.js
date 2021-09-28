const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const { DB, port } = require("./config");
const db = require("./models");

const app = express();
const Role = db.role;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const PORT=process.env.port||port;

db.mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initialDbSetup();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.listen(PORT, () => {
    console.log("Server started on port:" + PORT);
})

const itAdminRouter = require('./routes/itAdminRoute');
const managementRouter = require('./routes/managementRoute');
const productRouter = require('./routes/productRoute');
const productCategoryRouter = require('./routes/productCategoryRoute');
const shopRouter = require('./routes/shopRoute');
const salesRouteRouter = require('./routes/salesRouteRouter');

app.use('/itAdmin', itAdminRouter);
app.use('/management', managementRouter);
app.use('/management', productRouter);
app.use('/management', productCategoryRouter);
app.use('/management', shopRouter);
app.use('/management', salesRouteRouter);

require('./routes/authRoutes')(app);
require('./routes/routes')(app);
require('./routes/dataRoutes')(app);

function initialDbSetup() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("Added 'user' to roles collection");
        });
  
        new Role({
          name: "manager"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("Added 'manager' to roles collection");
        });
  
        new Role({
          name: "salesperson"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("Added 'salesperson' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("Added 'admin' to roles collection");
        });
      }
    });
  }