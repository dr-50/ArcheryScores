const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Bow, Scores } = require('../models');

router.get('/scoreentry', (req, res) => {
    console.log('=======================home route called');
    res.render('standardscorepage')
})

router.post('/postscores', (req, res) => {
    bowArr = ['1','1','1','1','1','1','1','1','1','1']
    userArr = ['1','1','1','1','1','1','1','1','1','1']
    roundArr=['user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1','user1_2021-06-19_1']
    endArr = ['1','2','3','4','5','6','7','8','9','10']
    arrow1Arr = ['1','1','1','1','1','1','1','1','1','1']
    arrow2Arr = ['1','1','1','1','1','1','1','1','1','1']
    arrow3Arr = ['1','1','1','1','1','1','1','1','1','1']
    shootdateArr=['2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19','2021-06-19']
   
    Scores.create({
        bowid: req.body.bowArr,
        userid: req.body.userArr,
        round: req.body.roundArr,
        end: req.body.endArr,
        arrow1: req.body.arrow1Arr,
        arrow2: req.body.arrow2Arr,
        arrow3: req.body.arrow3Arr,
        shootdate: req.body.shootdateArr
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router;