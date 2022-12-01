'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    // static associate({ Comment }) {
    //   User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    // }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};