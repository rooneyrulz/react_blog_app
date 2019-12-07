const express = require('express');
const {
    createServer
} = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');

dotenv.config();

const app = express();
const server = createServer(app);

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use('/api', require('./routes'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/users', require('./routes/auth'));

mongoose.Promise = global.Promise;
async function init() {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        if (con) console.log('connecting to mongodb!')
    } catch (error) {
        throw error.message
    }
}

init()

server.listen(process.env.PORT || 5000, () => console.log(`server running on port ${process.env.PORT || 5000}!`));