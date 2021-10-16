require("dotenv").config();

//Get env data and export
module.exports = {
  DB: process.env.atlasUri,
  port: process.env.port,
  SECRET: process.env.SECRET
};