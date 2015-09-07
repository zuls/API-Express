var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express' });
    res.json({message: 'hooray! welcome to our app'});
});

module.exports = router;