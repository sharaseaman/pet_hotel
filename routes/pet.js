var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('In GET/pet route');
    res.sendStatus(202);
});

module.exports = router;