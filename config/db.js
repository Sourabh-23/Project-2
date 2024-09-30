// config/db.js
//Importing Required Libraries:
const { Model } = require('objection');
const mysql = require('mysql2');
const Knex = require('knex');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

//Setting Up Knex Configuration:
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
});

// Bind all models to the knex instance
Model.knex(knex);

module.exports = knex;
