// models/User.js

/*The User model defines a user entity in the 
application, mapping to the users table in the 
database. It establishes a one-to-many relationship
 with the Post model, indicating that a user can
  have multiple posts*/

const { Model } = require('objection');
const Post = require('./Post');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  // Relation Mappings:

  /*
The relationMappings static getter is where 
relationships between models are defined. In this example,
 a User can have multiple Post entries associated with it.
Relation Type: Model.HasManyRelation indicates that 
one user can have many posts
  */
  static get relationMappings() {
    
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,

/*join: Describes how the two tables are linked:
from: 'users.id': The primary key of the users table.
to: 'posts.user_id': The foreign key in the posts
table that references the user's ID.*/

        join: {
          from: 'users.id',
          to: 'posts.user_id',
        }
      }
    };
  }
}

module.exports = User;
