// routes/postRoutes.js
const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

// Protect the following routes
router.use(verifyToken);
router.post('/', createPost); // Create a new post
router.get('/', getPosts); // Get all posts
router.get('/:id', getPostById); // Get post by ID
router.put('/:id', updatePost); // Update post by ID
router.delete('/:id', deletePost); // Delete post by ID

module.exports = router;

