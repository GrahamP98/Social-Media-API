// User:

// username

// String
// Unique
// Required
// Trimmed
// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference)
// Schema Settings:

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
const { Schema, model } = require('mongoose');
const moment = require('moment');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;