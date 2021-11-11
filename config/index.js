require("dotenv").config();

//Get env data and export
module.exports = {
  DB: process.env.atlasUri,
  port: 3001,
  SECRET: process.env.SECRET
};