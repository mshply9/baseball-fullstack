const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Player = sequelize.define('Team', {
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  league: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  g: {
    type: DataTypes.INTEGER,
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
  ties : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  win_percent: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  finish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  games_back: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  playoffs: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  r: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ra: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attendance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bat_age: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pitch_age: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ppf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  top_player: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  managers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Team;
