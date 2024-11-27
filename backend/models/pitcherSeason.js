const{ Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');
const Pitcher = require('./pitcher');

const pitcherSeason = sequelize.define('pitcherSeason', {
  playerID: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  season: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  age: {
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
  win_percent: {
    type: DataTypes.FLOAT,
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
  gf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cg: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sho: {
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
  h: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  r: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  er: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hr: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ibb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  so: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hbp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  era_plus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fip: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  whip: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  h9: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  hr9: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bb9: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  so9: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  so_bb: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  awards: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Pitcher.hasMany(pitcherSeason, {
  foreignKey: 'playerID',
});
pitcherSeason.belongsTo(Pitcher, {
  foreignKey: 'playerID',
});

module.exports = pitcherSeason; 