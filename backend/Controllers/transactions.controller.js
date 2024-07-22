const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTransaction = async (req, res, next) => {
    try{
        const { transaction } = req.body;
        transaction.userId = req.userId;

        await prisma.transaction.create ({
            data: transaction
        });
        res.status(200).json(transaction);
    } catch(err){
        res.sendStatus(400);
    }
}

const getAllTransactions = async (req, res, next) => {
    const transactionsList = await prisma.transaction.findMany({
        where: {
            userId: req.sub
        },
        orderBy: {
            transactionDate: 'desc'
        }
    })

    res.status(200).json(transactionsList);
}

const getTransactionById = async (req, res, next) => {
    const transactionId = parseInt(req.params.transactionId); 
    const transaction = await prisma.transaction.findFirst({
        where: {
            id: transactionId,
            userId: req.userId
        }
    })
    
    if(transaction){
        res.status(200).json(transaction)
    }else{
        res.sendStatus(404)
    }
}

const updateTransaction = async (req, res, next) => {
    const transactionId = parseInt(req.params.transactionId);
    const { transaction } = req.data;
    const updatedTransaction = await prisma.transaction.update({
        where: {
            id: transactionId
        },
        data: transaction
    })

    if(updatedTransaction){
        res.status(200).json(updatedTransaction);
    } else {
        res.sendStatus(500);
    }
}

const deleteTransaction = async (req, res, next) => {
    const transactionId = parseInt(req.params.transactionId);

    const deleteUser = await prisma.transaction.delete({
        where: {
            id: transactionId
        }
    })

    res.sendStatus(200);
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
}