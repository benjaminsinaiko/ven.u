const express = require('express')
const parseServer = require('./parseServer')

const router = express.Router()

router.use('/parse', parseServer)

module.exports = router
