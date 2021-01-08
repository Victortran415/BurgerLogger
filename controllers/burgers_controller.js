const express = require('express');
const router = express.Router();
const burgerJS = require("../model/burger.js")


//selectAll()
router.get('/', (req, res) => {
    burgerJS.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
})

//insertOne()
router.post('/api/burgers', (req, res) => {
    
})

//updateOne() = Devour
router.put('/api/burgers/:id', (req, res) => {
    
})


module.exports = router;