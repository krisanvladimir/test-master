const {Router} = require('express')
const router = Router()
const Order = require('../models/Order')

router.post('/add', async (req, res) => {
    try {
        const candidate = new Order({
            user: {
                name: req.body.name,
                lastName: req.body.lastName
            } ,
            market: req.body.market,
            model: req.body.model,
            count: req.body.count,
            price: req.body.price,
        })

        await   candidate.save()

        res.status(201).json({message: "Сохранено"})
    } catch (e) {
        console.log(e)
    }
})

router.get('/get', async (req, res) => {
    try {
        const list = await Order.find().lean()

        res.status(201).json([...list])
    }catch (e) {
        console.log(e)
    }
})

module.exports = router