﻿var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our app'});
});

module.exports = router;