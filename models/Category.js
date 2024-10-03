// models catagory


const { Model } = require('objection');
const Post = require('./Post'); // Ensure this path is correct

class Category extends Model {
  static get tableName() {
    return 'categories';
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'categories.id',
          to: 'posts.category_id',
        },
      },
    };
  }
}

module.exports = Category;
