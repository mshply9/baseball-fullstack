const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');
const Player = require('./player');

const playerSeason = sequelize.define('playerSeason', {
  playerID: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Player', 
      key: 'playerID',
    }
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
  g: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ab: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  r: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  h: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  doubles: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  triples: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hr: {
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
  cs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  so: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avg: {
    type: DataTypes.FLOAT,
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
  tb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gdp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hbp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sh: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ibb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  awards: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Player.hasMany(playerSeason, {
  foreignKey: 'playerID',
});
playerSeason.belongsTo(Player, {
  foreignKey: 'playerID',
});

module.exports = playerSeason;
