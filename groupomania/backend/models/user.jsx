//Create a user model with every info needed to appear be used for actions//
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Post,
        { onDelete: 'cascade' });
      
      models.User.hasMany(models.Comment,
        { onDelete: 'cascade' });

      models.User.hasMany(models.Like,
        { onDelete: 'cascade' });
      }
  };
  User.init({
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};