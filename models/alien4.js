const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:true
    },
    image: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('imageupload', dbSchema)