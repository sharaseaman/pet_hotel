var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('In GET/pet route');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM pets', function(queryError, resultObj){
                done();
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultObj.rows', resultObj.rows);
                    res.send(resultObj.rows);
                }
            })
        }
    })
});
router.post('/', function(req, res) {
    var newPetObj = req.body;
    console.log('baaaaallin');
    console.log(newPetObj);
    // res.sendStatus(202);
    pool.connect(function(connectionError, client, done) {
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            var pQuery = 'INSERT INTO pets (name, breed, color) VALUES ($1, $2, $3)';
            var valueArray = [ newPetObj.name, newPetObj.breed, newPetObj.color ];
            client.query(pQuery, valueArray, function(queryError, resultObj) {
                done();
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('yaaaaaay');
                    res.sendStatus(202);
                }
            });
        }
    })
});

// router.put('/:id', function (req, res) {
//     pool.connect(function (connectionError, client, done) {
//         console.log('req.body ->', req.params.id);
//         var dpId = req.params.id;

//         if (connectionError) {
//             console.log(connectionError);
//             res.sendStatus(500);
//         } else {
//             var pQuery = 'UPDATE pets SET checkedin= NOT checkedin WHERE id=$1';
//             var valueArray = [dpId];
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


// });//end put route

router.delete('/:id',function(req,res){
    pool.connect(function (connectionError, client, done) {
        console.log('req.body ->', req.params.id);
        var dpId = req.params.id;

        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            var pQuery = 'DELETE from pets WHERE id=$1';
            var valueArray = [dpId];
            client.query(pQuery, valueArray, function (queryError, resultObj) {
                done();
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('yaaaaaay');
                    res.sendStatus(202);
                }
            });
        }
    })


});//end delete route


module.exports = router;