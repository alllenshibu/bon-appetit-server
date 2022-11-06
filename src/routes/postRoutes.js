const express = require('express')
const router = express.Router()

const { protectUser } = require('../middlewares/auth')
const { createPost } = require('../controllers/post/createPost')
const { getPost } = require('../controllers/post/getPost')
const { acceptReq } = require('../controllers/post/acceptReq')
const { deliverReq } = require('../controllers/post/deliverReq')
const { imageUpload } = require('../../src/utils/s3');

// BASE URL - /api/post

router.post('/', imageUpload.single('file'), createPost)
router.get('/',  getPost)
router.put('/acceptReq/:id', acceptReq);
router.put('/deliveryReq/:id', deliverReq);

module.exports = router
