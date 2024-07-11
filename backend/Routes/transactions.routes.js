const express = require("express");
const transactionsController = require("../Controllers/transactions.controller");
const router = express.Router();
const asyncHandler = require("../Utils/asyncHandler");

router.post('/', asyncHandler(transactionsController.createTransaction));

module.exports = router;