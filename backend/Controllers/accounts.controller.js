const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all bank accounts
const getAllBankAccounts = async (req, res) => {
    filter = generateAccountFilters(req)
  try {
    const [count, accounts] = await prisma.$transaction([
        prisma.bankAccount.count({where: filter}),
        prisma.bankAccount.findMany({where: filter}),
    ])
    res.status(200).json({count: count, accounts: accounts});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a bank account by ID
const getBankAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const bankAccount = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
    });
    if (bankAccount) {
      res.status(200).json(bankAccount);
    } else {
      res.status(404).json({ error: 'Bank account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new bank account
const createBankAccount = async (req, res) => {
  const { account } = req.body;
  try {
    const newBankAccount = await prisma.bankAccount.create({
      data: account,
    });
    res.status(201).json(newBankAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a bank account by ID
const updateBankAccountById = async (req, res) => {
  const { id } = req.params;
  const { accountHolder, accountNumber, bankName, branchCode, swiftCode } = req.body;
  try {
    const updatedBankAccount = await prisma.bankAccount.update({
      where: { id: Number(id) },
      data: {
        accountHolder,
        accountNumber,
        bankName,
        branchCode,
        swiftCode,
      },
    });
    res.status(200).json(updatedBankAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a bank account by ID
const deleteBankAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.bankAccount.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBankAccounts,
  getBankAccountById,
  createBankAccount,
  updateBankAccountById,
  deleteBankAccountById,
};

const generateAccountFilters = (req) => {
    let filters = {}
    filters['userId'] = req.useId
    return filters
}