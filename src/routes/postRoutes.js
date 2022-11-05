const express = require('express')
const router = express.Router()

const { createPost } = require('../controllers/post/createPost')
const { getPost } = require('../controllers/post/getPost')
const protectUser = require('../middlewares/auth')

// BASE URL - /api/post

router.post('/', createPost)
router.get('/', getPost)

module.exports = router
