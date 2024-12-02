const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

// Import the config file
const config = require('../config/config.json'); 

// Get the current file name to avoid loading this file itself
const basename = path.basename(__filename); 
const db = {}; 

// Determine environment and pull appropriate config 
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; 

// Initialize Sequelize 
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Optional: disable logging for production
  }
)

// Test the connection 
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

// Dynamically load all models in this folder
fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up model associations if defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Attach Sequelize instance and models to db
db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

module.exports = db; 