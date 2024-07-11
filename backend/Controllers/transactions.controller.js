const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTransaction = async (req, res, next) => {
    const { transaction } = req.body;
    transaction.userId = req.userId;

    await prisma.transaction.create ({
        data: transaction
    });
    res.status(200).json(transaction);
}

module.exports = {
    createTransaction
}