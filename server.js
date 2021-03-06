const express = require('express');
const { createServer } = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors = require('cors');

const dbConnection = require('./config/db');

dotenv.config({ path: './.env' });

const app = express();
const server = createServer(app);

// ACCEPT CORS
app.use(cors());

// CONNECTING TO MONGODB
mongoose.Promise = global.Promise;
dbConnection();

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token'
  );

  if (req.method === 'OPTIONS') {
    req.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/api', require('./routes'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/users', require('./routes/auth'));

server.listen(process.env.PORT || 5000, () =>
  console.log(`server running on port ${process.env.PORT || 5000}!`)
);
