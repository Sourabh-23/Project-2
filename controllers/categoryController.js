// controller => catagory controller

const Category = require('../models/Category');

// Create a new category
const createCategory = async (req, res) => {
  const category = req.body; // Expecting a category object

  // Validate the category object
  if (!category.name || typeof category.name !== 'string' || category.name.trim() === '') {
    return res.status(400).json({ error: 'Category name is required and must be a non-empty string.' });
  }

  try {
    const newCategory = await Category.query().insert(category);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Failed to create category' });
  }
};


const getCategories = async (req, res) => {
  try {
    const categories = await Category.query();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.query().findById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ error: 'Failed to fetch category' });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Expecting an object with the fields to update

  try {
    const category = await Category.query().findById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const updatedCategory = await Category.query().patchAndFetchById(id, updates);
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(400).json({ error: 'Failed to update category' });
  }
};


const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Category.query().deleteById(id);
    if (result === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
};







module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
