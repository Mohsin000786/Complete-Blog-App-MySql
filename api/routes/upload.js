const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/youtube2022/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage })

router.post("/postImage", upload.single('file'), (req, res) => {
    const file = req.file
    res.status(200).json(file.filename)
})
router.post("/updateImage", upload.single('file'), (req, res) => {
    const file = req.file
    res.status(200).json(file.filename)
})

module.exports = router;