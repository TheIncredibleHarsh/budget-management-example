const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all credit cards
const getAllCreditCards = async (req, res) => {
  const filters = generateCardFilters(req)
  try {
    const [count, creditCards] = await prisma.$transaction([
      prisma.creditCard.count({
        where: filters
      }),    
      prisma.creditCard.findMany({
        where: filters,
        orderBy: {
            createdAt: 'desc'
        },
        skip: parseInt(req.query.offset),
        take: parseInt(req.query.limit)
      })    
    ])
    res.status(200).json({count: count, data: creditCards});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a credit card by ID
const getCreditCardById = async (req, res) => {
  const { id } = req.params;
  try {
    const creditCard = await prisma.creditCard.findUnique({
      where: { id: Number(id) },
    });
    if (creditCard) {
      res.status(200).json(creditCard);
    } else {
      res.status(404).json({ error: 'Credit card not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new credit card
const createCreditCard = async (req, res) => {
  const { 
    card 
  } = req.body;
  try {
    console.log(req.body)
    const newCreditCard = await prisma.creditCard.create({
      data: card
    });
    res.status(201).json(newCreditCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a credit card by ID
const updateCreditCardById = async (req, res) => {
  const { id } = req.params;
  const { cardNumber, cardHolderName, expirationMonth, expirationYear, cvv } = req.body;
  try {
    const updatedCreditCard = await prisma.creditCard.update({
      where: { id: Number(id) },
      data: {
        cardNumber,
        cardHolderName,
        expirationMonth,
        expirationYear,
        cvv,
      },
    });
    res.status(200).json(updatedCreditCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a credit card by ID
const deleteCreditCardById = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.creditCard.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCreditCards,
  getCreditCardById,
  createCreditCard,
  updateCreditCardById,
  deleteCreditCardById,
};

const generateCardFilters = (req) => {
  let filters = {}
  filters['userId'] = req.useId
  // for(const key in req.query){
  //     const value = req.query[key]

  //     switch(key) {
  //         case 'vendor': {
  //             filters['transactionVendor'] = {contains: value}
  //             break
  //         }
  //         case 'transactionType': {
  //             if(parseInt(value)){
  //                 filters['transactionType'] = {
  //                     id: parseInt(value)
  //                 }
  //             }
  //             break
  //         }
  //         case 'paymentMode': {
  //             if(parseInt(value)){
  //                 filters['paymentMethod'] = {
  //                     id: parseInt(value)
  //                 }
  //             }
  //             break
  //         }
  //     }
  // }

  return filters
}