const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Bow, Scores } = require('../models');

router.get('/scoreentry', (req, res) => {
    const messageAlert = "home called";
    console.log('=======================home route called');
    res.render('standardscorepage')
})


module.exports = router;