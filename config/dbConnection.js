const dbConfig = require("./dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

//db object with sequalize instnace and DB tables models
const db = {};
db.sequelize = sequelize;
// add/bind model
db.book = require("../model_db/book.model.js")(sequelize, DataTypes);
db.user = require("../model_db/user.model.js")(sequelize, DataTypes);
db.item = require("../model_db/item.model.js")(sequelize, DataTypes);
// add more models here ....

module.exports = db;
