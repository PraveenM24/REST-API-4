const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:miniblog@cluster0.l3q1a.mongodb.net/MiniBlog?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000;

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use("/uploads", express.static("./uploads"));

const alienRouter = require('./routes/aliens')
const alienRouter2 = require('./routes/aliens2')
const alienRouter3 = require('./routes/aliens3')
const alienRouter4 = require('./routes/aliens4')
const alienRouter5 = require('./routes/aliens5')
app.use('/posts', alienRouter)
app.use('/register', alienRouter2)
app.use('/messages', alienRouter3)
app.use('/imageupload', alienRouter4)
app.use('/test', alienRouter5)


app.listen(PORT, () => {
    console.log('Server Started')
})