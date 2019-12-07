const {
    Router
} = require('express');
const bcrypt = require('bcryptjs');
const {
    sign
} = require('jsonwebtoken');

const User = require('../models/User');
const isAuth = require('../middlewares/auth');

const router = Router({
    strict: true
});

// @ROUTE               >   POST  /api/users
// @DESC                >   REGISTER USERS
// @ACCESS CONTROL      >   PUBLIC
router.post('/', async (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;

    if (!username || !email || !password) return res.status(400).send('Invalid fields!');
    // if (password1 && password2 && (password1 !== password2)) return res.status(400).send('Passwords dont not match!');

    try {
        const user = await User.findOne({
            username
        }).exec();
        if (user) return res.status(400).send('User already exist!');

        const isEmail = await User.findOne({
            email
        }).exec();
        if (isEmail) return res.status(400).send('Email already taken!');

        const hashedPWD = await bcrypt.hash(password, 12);
        if (!hashedPWD) return res.status(500).send('Something went wrong!');

        const newUser = new User({
            username,
            email,
            password: hashedPWD
        });
        const isSaved = await newUser.save();

        const token = sign({
            id: isSaved._id
        }, process.env.JWT_KEY, {
            expiresIn: 360000
        });
        const payload = {
            token,
            user: isSaved
        }

        return res.status(201).json(payload);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE               >   POST  /api/users/auth
// @DESC                >   AUTHENTICATE USERS
// @ACCESS CONTROL      >   PUBLIC
router.post('/auth', async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    if (!username || !password) return res.status(400).send('Invalid fields!');

    try {
        const user = await User.findOne({
            username
        }).exec();
        if (!user) return res.status(400).send('User does not exist!');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials!');

        const token = sign({
            id: user._id
        }, process.env.JWT_KEY, {
            expiresIn: 360000
        });
        const payload = {
            token,
            user
        };
        return res.status(200).json(payload);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE               >   POST  /api/users/auth/user
// @DESC                >   GET AUTHENTICATE USER
// @ACCESS CONTROL      >   PRIVATE
router.get('/auth/user', isAuth, async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).exec();
        if (!user) return res.status(401).send('You are unauthorized!');

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});

module.exports = router;