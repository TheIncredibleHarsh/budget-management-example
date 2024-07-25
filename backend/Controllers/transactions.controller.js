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
    const filters = generateTransactionFilters(req.query)
    filters['userId'] = req.sub
    const [count, transactionsList] = await prisma.$transaction([
        prisma.transaction.count({
            where: filters
        }),    
        prisma.transaction.findMany({
            where: filters,
            orderBy: {
                transactionDate: 'desc'
            },
            skip: parseInt(req.query.offset),
            take: parseInt(req.query.limit)
        })    
    ])
    res.status(200).json({count: count, data: transactionsList});
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

const generateTransactionFilters = (query) => {
    filters = {}
    for(const key in query){
        const value = query[key]

        switch(key) {
            case 'vendor': {
                filters['transactionVendor'] = {contains: value}
            }
            case 'transactionType': {
                if(parseInt(value)){
                    filters['transactionType'] = {
                        id: parseInt(value)
                    }
                }
            }
            case 'paymentMode': {
                if(parseInt(value)){
                    filters['paymentMethod'] = {
                        id: parseInt(value)
                    }
                }
            }
        }
    }

    return filters
}