const express = require('express');
const router = express.Router();
const { getAllBankAccounts, getBankAccountById, createBankAccount, updateBankAccountById, deleteBankAccountById } = require('../Controllers/accounts.controller');

router.get('/', getAllBankAccounts);
router.get('/:id', getBankAccountById);
router.post('/', createBankAccount);
router.put('/:id', updateBankAccountById);
router.delete('/:id', deleteBankAccountById);

module.exports = router;