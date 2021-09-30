const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        name: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        }
    },
    market: {
        type: String,
        ref: 'Market'
    },
    model:{
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    count: {
        type: Number,
        require: true,
    }
})

module.exports = model('Order', orderSchema)