const {sequelize, DataTypes} = require('sequelize');
const sequlize = require('./index');

const Pitcher = sequelize.define('Pitcher', {
  player_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  positions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bats: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  throws: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  born: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  draft: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  war: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  w: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  l: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  era: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  g: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ip: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  so: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  whip: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Pitcher;