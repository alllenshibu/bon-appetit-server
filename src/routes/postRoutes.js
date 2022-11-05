const express = require('express')
const router = express.Router()

const { createPost } = require('../controllers/post/createPost')
const { getPost } = require('../controllers/post/getPost')
const {acceptReq} = require('../controllers/post/acceptReq')
const { protectUser } = require('../middlewares/auth')

// BASE URL - /api/post

router.post('/', protectUser, createPost)
router.get('/', getPost)
router.put('/acceptReq/:id',protectUser,acceptReq)

module.exports = router
