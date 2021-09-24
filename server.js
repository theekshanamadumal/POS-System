const express = require('express')
const app = express()

const cors=require("cors")
require('dotenv').config();
//const path= require('path')
const  mongoose  = require('mongoose');

//app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())


const uri = process.env.atlasUri;
mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true } );
const connection= mongoose.connection;
connection.once('open',()=>{console.log('mongodb db connection established' )})


const itAdminRouter = require('./routes/itAdminRoute');
const managementRouter = require('./routes/managementRoute');
const productRouter = require('./routes/productRoute');
const productCategoryRouter = require('./routes/productCategoryRoute');

app.use('/itAdmin', itAdminRouter);
app.use('/management', managementRouter);
app.use('/management', productRouter);
app.use('/management', productCategoryRouter);


const port=process.env.port||3001;
app.listen(port,function () {console.log('server on:',port);})

