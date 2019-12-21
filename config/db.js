import mongoose from 'mongoose';

module.exports = () => {
  try {
    const con = mongoose.connect('mongodb://localhost:27017/blog_post_api', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    if (con) console.log('connecting to mongodb!');
  } catch (error) {
    throw error.message;
  }
};
