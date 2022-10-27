var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {

    var x = 10.6578;
    var random = Math.random() * x;
    var fround = Math.fround(random);
    var round = Math.round(random);
    res.render('compute', {
        title: 'Murali Krishna Sundari',
        randomKey: "Math.random() apllied to" + x + " is " + random,
        fRoundKey: "Math.fround() apllied to" + random + " is " + fround,
        roundKey: "Math.round() apllied to" + random + " is " + round
    });
});
module.exports = router;