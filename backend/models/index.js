const dbConfig = require("../config/db");
require("dotenv").config();
const {Sequelize, DataTypes} = require("sequelize");

// Configuration sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: process.env.SECRET_PORT,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à la Base de Données.")
  })
  .catch(err => {
    console.log("error" + err)
  })

const db = {}

db.Sequelize = sequelize

//Models roads//
db.users = require("./users")(sequelize, DataTypes)
db.posts = require("./posts")(sequelize, DataTypes)
db.comments = require("./comments")(sequelize, DataTypes)

db.Sequelize.sync({force: false}).then(() => {
  console.log("All models were synchronized successfully.")
})

// Foreign Keys
db.users.hasMany(db.posts, {
  foreignKey: "users_id",
  as: "posts",
})

db.posts.belongsTo(db.users, {
  foreignKey: "users_id",
  as: "users",
})

db.posts.hasMany(db.comments, {
  foreignKey: "post_id",
  as: "comments",
})

db.comments.belongsTo(db.posts, {
  foreignKey: "post_id",
  as: "posts",
})
db.users.hasMany(db.comments, {
  foreignKey: "users_id",
  as: "comments",
})

db.comments.belongsTo(db.users, {
  foreignKey: "users_id",
  as: "users",
})

module.exports = db