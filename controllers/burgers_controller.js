var express = require("express");

var router = express.Router();

var burger = require('./../models/burger.js')

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req,res){
    burger.selectAll(function(burger_data){
      console.log(burger_data);  
      res.render('index', {burger_data});
    })
})

router.put('/burgers/update', function(req,res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
    
        res.redirect('/');
    })
})

// Export routes for server.js to use.
module.exports = router;