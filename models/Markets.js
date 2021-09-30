const {Schema, model} = require('mongoose')

const marketSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
})

module.exports = model('Market', marketSchema)