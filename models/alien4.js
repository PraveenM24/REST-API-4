const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:true
    },
    image: {
        type:String,
    }
})

module.exports = mongoose.model('imageupload', dbSchema)