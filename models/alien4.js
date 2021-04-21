const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    image: String,

})

module.exports = mongoose.model('imageupload', dbSchema)