//Imporitng required NPM packges
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')


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



///////////////// web application /////////
app.use(require('./routes/adminRoutes/index')) ;
app.use(require('./routes/managerRoutes/index'));

//require('./routes/routes')(app);  
require('./routes/authRoutes')(app);
require('./routes/dataRoutes')(app);



//Setting up server port accroding to the server enviroment
const PORT=process.env.PORT||port;
//var server_host = process.env.HOST || '0.0.0.0';



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


// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "frontend", "build")))



// Right before your app.listen(), add this:
 app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
 });

app.listen(PORT, () => {
    console.log("Server started on port:" + PORT);
})

