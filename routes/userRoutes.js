// routes/userRoutes.js
const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');

const router = express.Router();

// User registration should not require authentication
router.post('/register', createUser); // Register new user
router.post('/login', loginUser); // User login

// Protect the following routes
router.use(verifyToken);
router.get('/', getUsers); // Get all users
router.get('/:id', getUserById); // Get user by ID
router.put('/:id', updateUser); // Update user by ID
router.delete('/:id', deleteUser); // Delete user by ID

module.exports = router;
