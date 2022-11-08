const express = require('express')
const router = express.Router()

const { createProfile } = require('../controllers/volunteer/createProfile');
const { protectUser } = require('../middlewares/auth');
const { imageUpload } = require('../../src/utils/s3');
const path = require('path')

// BASE URL - /api/volunteer



router.put('/createProfile', imageUpload.single('file'), protectUser, createProfile)

module.exports = router
