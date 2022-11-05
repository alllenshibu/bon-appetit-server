const express = require('express')
const router = express.Router()

const { protectUser } = require('../middlewares/auth')
const { createPost } = require('../controllers/post/createPost')
const { getPost } = require('../controllers/post/getPost')
const { acceptReq } = require('../controllers/post/acceptReq')
const { deliverReq } = require('../controllers/post/deliverReq')
const { upload } = require('../../src/utils/s3');

// BASE URL - /api/post

router.post('/', upload.single('file'), protectUser, createPost)
router.get('/', getPost)
router.put('/acceptReq/:id', protectUser, acceptReq);
router.put('/deliveryReq/:id', protectUser, deliverReq);

module.exports = router
