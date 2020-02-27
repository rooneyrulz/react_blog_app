const { Router } = require('express');

const router = Router({
  strict: 'true'
});

router.get('/', require('../controllers'));

module.exports = router;
