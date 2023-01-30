const multer = require('multer')

//Multer
const storage = multer.diskStorage({
  destination: 'src/uploads/',
  filename: function (req, file, cb) {
    let milliseconds = new Date().getTime()

    req.dataFile = {
      name: `${milliseconds}_${file.originalname}`,
    }

    cb('', req.dataFile.name)
  },
})
const upload = multer({
  storage,
})

module.exports = upload.single('file')
