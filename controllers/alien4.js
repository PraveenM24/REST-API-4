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
        const newTea = new Alien({
          image: req.file.path,
        });
  
        newTea.save((err, data) => {
          if (err) return res.json("Something is wrong. Please check.");
          return res.json(data);
        });
  };

module.exports = {
    uploadImg,
    newImg,
};