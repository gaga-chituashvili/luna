const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const CoffeeSchema = sequelize.define(
  "Coffee",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "coffees",
    timestamps: true,
  },
);

module.exports = { CoffeeSchema };
