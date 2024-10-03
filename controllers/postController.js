//  controller => postcontroller


const Post = require('../models/Post'); // Adjust the path as necessary

const createPost = async (req, res) => {
  const post = req.body; // Expecting a post object

  try {
    const newPost = await Post.query().insert(post);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ error: 'Failed to create post' });
  }
};


const getPosts = async (req, res) => {
  try {
    const posts = await Post.query();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};


const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.query().findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Expecting an object with the fields to update

  try {
    const post = await Post.query().findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const updatedPost = await Post.query().patchAndFetchById(id, updates);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(400).json({ error: 'Failed to update post' });
  }
};


const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Post.query().deleteById(id);
    if (result === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
};


module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getPostById
};
