const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    sender: {
        type: String,
        required: true
    },
    lreceiver: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('messages', dbSchema)