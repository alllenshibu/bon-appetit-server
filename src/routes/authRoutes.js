const express = require('express')
const router = express.Router()

const { volunteerLogin, volunteerSignup } = require('../controllers/auth/volunteerAuth')
// const { userLogin, userSignup } = require('../controllers/auth/userAuth')

// BASE URL - /api/auth


router.post('/volunteer/signup', volunteerSignup)
router.post('/volunteer/login', volunteerLogin)


// router.post('/org/signup', orgSignup)
// router.post('/org/login', orgLogin)

module.exports = router