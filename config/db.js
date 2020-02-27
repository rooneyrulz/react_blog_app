import mongoose from 'mongoose';

module.exports = async () => {
  try {
    const con = await mongoose.connect(
      'mongodb://localhost:27017/blog_post_api',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );
    if (con) console.log('connecting to mongodb!'.bold());
  } catch (error) {
    throw error.message;
  }
};
