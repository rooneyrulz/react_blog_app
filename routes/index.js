const {
    Router
} = require('express');

const router = Router({
    strict: 'true'
});


router.get('/', (req, res, next) => res.send('It works!'));


module.exports = router;