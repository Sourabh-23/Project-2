 // Model => catagory

const { Model } = require('objection');
const Post = require('./Post');

class Category extends Model {
  static get tableName() {
    return 'categories';
  }

  static get relationMappings() {
    return {
      posts: {
//one category can have many posts.⬇️
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
