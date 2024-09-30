const express = require('express');
const {
  getUsers,
  createUser,
  createCategory,
  createPost,
  getCategories 
} = require('../controllers/userController');

const router = express.Router();

// Define routes
router.get('/', getUsers); // get all users
router.post('/', createUser); // to create users with name and email
router.post('/categories', createCategory); // create  New categories with name
router.get('/categories', getCategories);  // get all catagories
router.post('/posts', createPost); // New route for posts

module.exports = router;
