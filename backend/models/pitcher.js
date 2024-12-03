const {sequelize, DataTypes} = require('sequelize');
const sequlize = require('./index');

module.exports = (sequelize, DataTypes) => {
const Pitcher = sequelize.define('Pitcher', {
  playerID: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false, 
    unique: true,
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

Pitcher.associate = (models) => {
  Pitcher.hasMany(models.PitcherSeason, {
    foreignKey: 'playerID',
    as: 'pitcherSeasons',
  })
}

return Pitcher;
};