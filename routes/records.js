var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');


router.get('/',function(req,res){
    console.log("router get is working");
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT name FROM pets', function (queryError, resultObj) {
                done();
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultObj.rows', resultObj.rows);
                    res.send(resultObj.rows);
                }
            })
        }
    })
});//end get


// router.post('/', function (req, res) {
//     var newPetObj = req.body;
//     console.log('baaaaallin');
//     console.log(newPetObj);
//     // res.sendStatus(202);
//     pool.connect(function (connectionError, client, done) {
//         if (connectionError) {
//             console.log(connectionError);
//             res.sendStatus(500);
//         } else {
//             var pQuery = 'INSERT INTO pets (name, breed, color) VALUES ($1, $2, $3)';
//             var valueArray = [newPetObj.name, newPetObj.breed, newPetObj.color];
//             client.query(pQuery, valueArray, function (queryError, resultObj) {
//                 done();
//                 if (queryError) {
//                     console.log(queryError);
//                     res.sendStatus(500);
//                 } else {
//                     console.log('yaaaaaay');
//                     res.sendStatus(202);
//                 }
//             });
//         }
//     })
// });
module.exports = router;