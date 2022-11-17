const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const { protectUser } = require('../middlewares/auth')
const { createPost } = require('../controllers/post/createPost')
const { getPost } = require('../controllers/post/getPost')
const { acceptReq } = require('../controllers/post/acceptReq')
const { deliverReq } = require('../controllers/post/deliverReq')
const { uploadImage } = require('../controllers/post/uploadImage')
const {getImage } = require('../controllers/post/getImage')


// BASE URL - /api/post

router.post('/',  protectUser, createPost)
router.get('/', protectUser, getPost)
router.put('/acceptReq/:id', protectUser, acceptReq);
router.put('/deliveryReq/:id', protectUser, deliverReq);

router.put('/image/:id', upload.single('file'), protectUser, uploadImage)
router.get('/image', protectUser, getImage)

module.exports = router
