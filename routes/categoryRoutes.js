// routes/categoryRoutes.js
const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

// Protect the following routes
router.use(verifyToken);
router.post('/', createCategory); // Create a new category
router.get('/', getCategories); // Get all categories
router.get('/:id', getCategoryById); // Get category by ID
router.put('/:id', updateCategory); // Update category by ID
router.delete('/:id', deleteCategory); // Delete category by ID

module.exports = router;
