require("dotenv").config();

module.exports = {
  DB: process.env.atlasUri,
  port: process.env.port,
  SECRET: process.env.SECRET
};