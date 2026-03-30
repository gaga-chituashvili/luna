const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = Order;
