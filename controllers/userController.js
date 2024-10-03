// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Validation function for user input
const validateUser = (user) => {
  const errors = {};
  if (!user.username) errors.username = 'Username is required';
  if (!user.email) errors.email = 'Email is required';
  if (!user.password) errors.password = 'Password is required';
  return Object.keys(errors).length ? errors : null;
};

// Create new users
const createUser = async (req, res) => {
  const user = req.body;

  // Validate input
  const errors = validateUser(user);
  if (errors) return res.status(400).json(errors);

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await User.query().insert({ ...user, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const user = await User.query().findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Failed to log in user.' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.query().withGraphFetched('posts');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.query().findById(id).withGraphFetched('posts');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  try {
    const user = await User.query().patchAndFetchById(id, updates);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ error: 'Failed to update user' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await User.query().deleteById(id);
    if (result === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
