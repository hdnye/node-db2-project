const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const cars = await db('cars').where({ id }).first()
        res.json(cars)
    } catch(err) {
        next(err)
    }
})


module.exports = router;