const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const fetchLookupData = async (req, res, next) => {
    const lookupName = req.params.lookupName.toString();
    const user = await prisma.user.findUnique({
        where: {
            id: req.userId,
        }
    });
    if(!user){
        res.sendStatus(400);
        return;
    }
    try{
        switch(lookupName) {
            case 'transactionType': {
                fetchTransactionTypeLookup(user).then(result => res.status(200).json(result))
                break
            }
            case 'paymentMethod': {
                fetchPaymentMethodLookup(user).then(result => res.status(200).json(result))
                break
            }
            case 'category': {
                fetchCategoryLookup(user).then(result => res.status(200).json(result))
                break
            }
            default: {
                res.sendStatus(400);
            }
                
        }
    } catch {
        return []
    }
}

const fetchTransactionTypeLookup = async (user) => {
    const transactionTypes = await prisma.transactionType.findMany()
    return transactionTypes;
}

const fetchPaymentMethodLookup = async (user) => {
    const paymentMethods = await prisma.paymentMethod.findMany()
    return paymentMethods;
}

const fetchCategoryLookup = async (user) => {
    const categories = await prisma.transactionCategory.findMany()
    return categories;
}

module.exports = {fetchLookupData}