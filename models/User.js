const {
    Schema,
    model
} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required!']
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    },
    posts: [{
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('User', userSchema);