require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Api = require("./models/Api.js")

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`,
  {
    logging: false,
    native: false,
  }
);

Api(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};