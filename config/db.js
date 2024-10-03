
// config=> db.js
const { Model } = require('objection');
const Knex = require('knex');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// Setting up Knex configuration
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  debug: true
});

// Bind all models to the knex instance
Model.knex(knex);

module.exports = knex;
