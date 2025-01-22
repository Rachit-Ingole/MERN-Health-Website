const express = require('express')
const router = express.Router()
const cors = require('cors');
router.use(cors());

const { getQuote } = require('../controllers/others')

router.get('/quote', getQuote)
module.exports = router
