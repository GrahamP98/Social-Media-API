// Thought:

// thoughtText

// String
// Required
// Must be between 1 and 280 characters
// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)

// String
// Required
// reactions (These are like replies)

// Array of nested documents created with the reactionSchema
// Schema Settings:

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    }
},

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;