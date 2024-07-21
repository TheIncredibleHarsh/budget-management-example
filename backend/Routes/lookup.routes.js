const express = require('express')
const router = express.Router()
const lookupController = require("../Controllers/lookup.controller.js")
const asyncHandler = require("../Utils/asyncHandler")

router.get('/:lookupName', asyncHandler(lookupController.fetchLookupData));

module.exports = router