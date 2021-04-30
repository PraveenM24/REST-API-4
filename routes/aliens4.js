const express = require('express')
const router = express.Router()
const Alien = require('../models/alien4')
//const dataController = require('../controllers/alien4')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        image: req.body.image,
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error', err)
    }
})

// router.post(
//     "/",
//     dataController.uploadImg,
//     dataController.newImg
//   );

router.delete('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router
