const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tests', dbSchema)