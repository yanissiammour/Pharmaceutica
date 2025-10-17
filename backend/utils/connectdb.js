// utils/connectdb.js

import knex from 'knex';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const db = knex({
  client: 'pg', // Specify the client is PostgreSQL
  connection: process.env.DATABASE_URL,
  searchPath: ['public'], // Specify the schema to use
});

// Test the connection
db.raw('SELECT 1')
  .then(() => {
    console.log('PostgreSQL connected successfully! 🐘');
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL:', err);
  });

export default db;