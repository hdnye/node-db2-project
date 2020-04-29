const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('here')
    try {
        const cars = await db("cars")
        res.status(200).json(cars)
    } catch(err) {
        console.log(err)
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
});
//CREATE new resource
router.post('/', async (req, res, next) => {
    try {
        const newCar = req.body
        const [id] = await db('cars').insert(newCar)
        const car = await db('cars').where({ id })
        res.status(202).json(car)  
       } catch(err) {
           console.log(err)
           next(err)
       }
});    

//UPDATE resource
router.put('/:id', validateId(), async (req, res, next) => {
    try {
        const { id } = req.params
        await db('cars').where({ id }).update(req.body)
        const updateCar = await db('cars').where({ id }).first()
        res.status(202).json(updateCar)
    } catch(err) {
        console.log(err)
        next(err)
    }
})

//DELETE resource
router.delete('/:id', validateId(), async (req, res, next) => {
    try {
        const { id } = req.params
        await db('cars').where({ id }).del()
        res.status(204).end()
    } catch(err) {
        console.log(err)
        next(err)
    }
})

//Custom Middleware
function validateId() {
    return async (req, res, next) => {
        try {
            const { id } = req.params
            const car = await db('cars').where({ id }).first()

            if(!car) {
                res.status(404).json({
                    message: 'Vehicle not found'
                })
            }
            req.car = car
        } catch(err) {
            next(err)
        }
    }
}

module.exports = router;