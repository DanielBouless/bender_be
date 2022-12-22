'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {

    // static associate({ Comment }) {
    //   User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    // }

  };
  Event.init(
    {
      eventId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      max_guests: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      images: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      private: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Event",
      tableName: "events",
    }
  );
  return Event;
};