const multer = require("multer");
const Alien = require('../models/alien4')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const uploadImg = multer({storage: storage}).single('image');


const newImg = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    //check if tea already exists in db
    Alien.findOne({ name: req.body.name }, (data) => {
      //if tea not in db, add it
      if (data === null) {
        const newImg = new Alien({
          name: req.body.name,
          image: req.file.name
        });
  
        // save to database
        newImg.save((err, data) => {
          if (err) return res.json("Something is wrong. Please check.");
          return res.json(data);
        });
      } else {
        return res.json(`${name} tea already exists.`);
      }
    });
  };
  

module.exports = {
    uploadImg,
    newImg,
};