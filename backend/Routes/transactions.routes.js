const express = require("express");
const transactionsController = require("../Controllers/transactions.controller");
const router = express.Router();
const asyncHandler = require("../Utils/asyncHandler");

router.post('/', asyncHandler(transactionsController.createTransaction));
router.get('/', asyncHandler(transactionsController.getAllTransactions));
router.get('/:transactionId', asyncHandler(transactionsController.getTransactionById));
router.put('/:transactionId', asyncHandler(transactionsController.updateTransaction));
router.delete('/:transactionId', asyncHandler(transactionsController.deleteTransaction));

module.exports = router;