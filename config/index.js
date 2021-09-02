require("dotenv").config();

module.exports = {
  DB: process.env.DB,
  PORT: process.env.PORT |5000,
  SECRET: process.env.SECRET|12345
};