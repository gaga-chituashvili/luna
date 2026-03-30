const { DataTypes } = require("sequelize");
const { sequelize } = require("@/utils/db");

const Rate = sequelize.define(
  "Rate",
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,  
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rates",
    timestamps: true,
  }
);

module.exports = { Rate };