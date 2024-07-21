import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main() {

    console.log("creating transaction types")
    prisma.transactionType.createMany ({
            data: [
                {name: 'Income'},
                {name: 'Expense'}
            ]    
        }
    )

    prisma.paymentMethod.createMany ({
        data: [
            {name: 'Card'},
            {name: 'Cash'},
            {name: 'Bank Account'}
        ]
    })
}