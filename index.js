const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./config/db'); // Import DB first
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Good morning!');
});

// Routes
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
