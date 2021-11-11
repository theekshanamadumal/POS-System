require("dotenv").config();

//Get env data and export
module.exports = {
  DB: process.env.atlasUri,
  port: 5000,
  SECRET: process.env.SECRET
};