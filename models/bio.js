const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Bio extends Model {}

Bio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    favorite_movies_or_tv_shows: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_songs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zodiac_sign: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_hobby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_quote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "bio",
  }
);

module.exports = Bio;
