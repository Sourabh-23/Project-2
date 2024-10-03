// models post


const { Model } = require('objection');
const User = require('./User'); // Ensure this path is correct
const Category = require('./Category'); // Ensure this path is correct

class Post extends Model {
  static get tableName() {
    return 'posts';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'posts.user_id',
          to: 'users.id',
        },
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'posts.category_id',
          to: 'categories.id',
        },
      },
    };
  }
}

module.exports = Post;
