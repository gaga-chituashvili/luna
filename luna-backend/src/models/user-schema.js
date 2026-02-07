const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const UserSchema = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthDate: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
  tableName: 'users',
});

module.exports = { UserSchema };
