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
  User.init(
    {
      userId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};