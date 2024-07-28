const express = require('express')
const router = express.Router()
const cardsController = require('../Controllers/cards.controller')
const asyncHandler = require('../Utils/asyncHandler')

router.post('/', asyncHandler(cardsController.createCreditCard));
router.get('/', asyncHandler(cardsController.getAllCreditCards));

module.exports = router