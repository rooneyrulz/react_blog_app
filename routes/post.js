const { Router } = require('express');

const isAuth = require('../middlewares/auth');
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
  getPostsByAuthUser
} = require('../controllers/post');

const router = Router({
  strict: 'true'
});

// @ROUTE           >  GET  /api/posts
// @DESC            >  GET ALL POSTS
// @ACCESS CONTROL  >  PUBLIC

// @ROUTE           >  POST  /api/posts
// @DESC            >  ADD POSTS
// @ACCESS CONTROL  >  PRIVATE
router
  .route('/')
  .get(getPosts)
  .post(isAuth, addPost);

// @ROUTE           >  GET  /api/posts/me
// @DESC            >  GET ALL BLOGS BY THE AUTH USER
// @ACCESS CONTROL  >  PRIVATE
router.get('/me', isAuth, getPostsByAuthUser);

// @ROUTE           >  GET  /api/posts/:id
// @DESC            >  GET SINGLE POST
// @ACCESS CONTROL  >  PUBLIC

// @ROUTE           >  PATCH  /api/posts
// @DESC            >  UPDATE EXISTING POST
// @ACCESS CONTROL  >  PRIVATE

// @ROUTE           >  DELETE  /api/posts
// @DESC            >  DELETE EXISTING POST
// @ACCESS CONTROL  >  PRIVATE
router
  .route('/:id')
  .get(getPost)
  .put(isAuth, updatePost)
  .delete(isAuth, deletePost);

module.exports = router;
