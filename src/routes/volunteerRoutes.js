const express = require('express')
const router = express.Router()

const {createProfile} = require("../controllers/volunteer/createProfile")

// BASE URL - /api/volunteer


router.put('/createProfile', createProfile)





module.exports = router