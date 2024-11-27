const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://baseball_user:your_password@localhost:5432/baseball_analytics', {
  dialect: 'postgres',
  logging: false, // disable logging for production
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
