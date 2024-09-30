const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const knex = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hexalytics assignment');
});

// User routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} at http://localhost:${PORT}/`.bgMagenta.white);
});
