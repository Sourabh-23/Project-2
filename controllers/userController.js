// CONTROLLERS => User Controllers

const User = require('../models/User');
const Post = require('../models/Post');
const Category = require('../models/Category');

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

// Create new users
const createUser = async (req, res) => {
  try {
    const users = await Promise.all(req.body.map(async (user) => {
      return await User.query().insert(user);
    }));
    res.status(201).json(users);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'Failed to create user' });
  }
};

// Create a new category
const createCategory = async (req, res) => {
 
  try {
    const category = await Category.query().insert({ name });
    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(400).json({ error: 'Failed to create category' });
  }
};

 // Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.query(); // Fetch all categories
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}

// Create a new post with user and category
const createPost = async (req, res) => {
  
  try {
    const post = await Post.query().insert({ title, content, user_id: userId, category_id: categoryId });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ error: 'Failed to create post' });
  }
};

module.exports = {
  getUsers,
  createUser,
  createCategory,
  createPost,
  getCategories
};
