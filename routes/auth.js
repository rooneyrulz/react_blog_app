const { Router } = require('express');

const isAuth = require('../middlewares/auth');
const {
  getAuthUser,
  registerUser,
  authenticateUser
} = require('../controllers/auth');

const router = Router({
  strict: true
});

// @ROUTE               >   POST  /api/users
// @DESC                >   REGISTER USERS
// @ACCESS CONTROL      >   PUBLIC
router.post('/', registerUser);

// @ROUTE               >   POST  /api/users/auth
// @DESC                >   AUTHENTICATE USERS
// @ACCESS CONTROL      >   PUBLIC
router.post('/auth', authenticateUser);

// @ROUTE               >   POST  /api/users/auth/user
// @DESC                >   GET AUTHENTICATE USER
// @ACCESS CONTROL      >   PRIVATE
router.get('/auth/user', isAuth, getAuthUser);

module.exports = router;
