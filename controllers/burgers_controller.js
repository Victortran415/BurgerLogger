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
    burgerJS.insertOne(['burger_name'], [req.body.burger_name], (data) => {
        console.log(data)
        res.json({ id: data.insertId })
    });
});

// updateOne() = Devour
router.put("/api/burgers/:id", (req, res) => {
	const condition = `id = ${req.params.id}`;

	burgerJS.updateOne(condition, (results) => {
		if (results.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    burgerJS.deleteOne(condition, (results) => {
        
        if (results.changeRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end()
    })
})

module.exports = router;