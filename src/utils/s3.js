const express = require('express')
const router = express.Router()


const multer = require('multer')

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images',
    filename: (req, file, cb) => {
        // console.log("file", file)
        cb(null, file.originalname)
        // file.fieldname is name of the field (image)
        // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

module.exports = { imageUpload }