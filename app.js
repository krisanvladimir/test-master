const express = require('express')
const config = require('./config/default.json')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api.routers'))

const PORT = config.PORT || 5000

async function start() {
    try {
        await mongoose.connect(config.MongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})
    }catch (e) {
        console.log('Server Error', e)
    }
}
start()
