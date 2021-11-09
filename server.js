//Imporitng required NPM packges
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');


//Imporitng required dependencies
const { DB, port } = require("./config");
const db = require("./models");
const app = express();
const Role = db.role;

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


//Setting up server port accroding to the server enviroment
const PORT=process.env.port||port;


//Connectiong to DB and start the server
db.mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify :false
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

//const adminRoutes = require('./routes/adminRoutes');
//const managerRoutes = require('./routes/managerRoutes');

//app.use('/itAdmin', adminRoutes);
//app.use('/management', managerRoutes);
//require('./routes/routes')(app);  
require('./routes/authRoutes')(app);
require('./routes/dataRoutes')(app);


///////////////// web application /////////
require('./routes/adminRoutes/index')(app);
require('./routes/managerRoutes/index')(app);
//Initialize auth details on the DB when the server runs for the first time
function initialDbSetup() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
  
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


