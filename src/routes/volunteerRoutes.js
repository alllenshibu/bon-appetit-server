const express = require('express')
const router = express.Router()

const { createProfile } = require('../controllers/volunteer/createProfile');
const { protectUser } = require('../middlewares/auth');
const { upload } = require('../../src/utils/s3');
// BASE URL - /api/volunteer

router.put('/createProfile', upload.single('file'),protectUser, createProfile)

module.exports = router
