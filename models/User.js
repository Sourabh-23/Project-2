// models=user.js


const { Model } = require('objection');
const Post = require('./Post'); // Ensure this path is correct

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.user_id',
        },
      },
    };
  }
}

module.exports = User;
