const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({
    image: Buffer,
})

module.exports = mongoose.model('imageupload', dbSchema)