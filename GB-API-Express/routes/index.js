var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our app This is auosome !'});
});

module.exports = router;