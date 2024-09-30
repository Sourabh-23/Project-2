// models/Post.js

/*The Post model represents a post entity in your application,
 mapped to the posts table in the database. This model
  establishes relationships with the User and Category models, 
  indicating that each post belongs to a user and can belong
   to a specific categor */

   // Imports:

const { Model } = require('objection');
const User = require('./User');
const Category = require('./Category');

class Post extends Model {
  static get tableName() {
    return 'posts';
  }

// Relation Mappings

  static get relationMappings() {
    return {
      user: {
        //each post belongs to one user ⬇️
        relation: Model.BelongsToOneRelation,
        // related model is the User model.⬇️
        modelClass: User,
        join: {
          from: 'posts.user_id',
          to: 'users.id',
        },
      },
      category: {
        //ndicates that each post belongs to a single category.⬇️
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