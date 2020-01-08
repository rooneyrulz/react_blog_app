const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title must not be empty!']
  },
  description: {
    type: String,
    required: [true, 'description is empty!']
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Post', postSchema);
