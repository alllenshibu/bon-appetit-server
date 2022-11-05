const express = require('express')
const router = express.Router()

const { volunteerLogin, volunteerSignup } = require('../controllers/auth/volunteerAuth')
const { orgLogin, orgSignup } = require('../controllers/auth/orgAuth')
const protectUser = require('../middlewares/auth')

// BASE URL - /api/auth


router.post('/volunteer/signup', volunteerSignup)
router.post('/volunteer/login', volunteerLogin)


router.post('/org/signup', orgSignup)
router.post('/org/login', orgLogin)



module.exports = router