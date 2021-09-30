const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

module.exports = model('User', userSchema)