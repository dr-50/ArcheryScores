const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Bow, Scores } = require('../models');

router.get('/', (req, res) => {
    const messageAlert = "home called";
    console.log('=======================home route called');
    res.render('homepage', {messageAlert})
})

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return
//     }
//     res.render('login');
// })

module.exports = router;