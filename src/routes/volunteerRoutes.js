const express = require('express')
const router = express.Router()

const { createProfile } = require('../controllers/volunteer/createProfile');
const { protectUser } = require('../middlewares/auth');
const path = require('path')

// BASE URL - /api/volunteer



router.put('/createProfile', protectUser, createProfile)

module.exports = router
