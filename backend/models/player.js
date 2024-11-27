const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index'); // Assuming sequelize is set up in index.js

const Player = sequelize.define('Player', {
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
  avg : {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  war: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ab: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  h: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hr: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avg: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  r: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rbi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  obp: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  slg: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ops: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ops_plus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Player;
