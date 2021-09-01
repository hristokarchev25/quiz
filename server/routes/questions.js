const router = require('express').Router();
const { Question } = require("../models/Question");


router.get('/all', (req, res) => {
    Question.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

router.post('/add', (req, res) => {
    const dbCard = req.body;

    Question.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});


module.exports = router;