const multer = require("multer");
// const Alien = require('../models/alien4')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const uploadImg = multer({storage: storage}).single('image');

// const newImg = (req, res) => {
//         const alien = new Alien({
//           image: req.file.path,
//         })

//         try {
//           const a1 =  alien.save()
//           res.json(a1)
//         } catch (err) {
//           res.send('Error')
//       }
//   };

  

module.exports = {
    uploadImg,
    // newImg,
};