
export enum TransactionType {
    Income,
    Expense
}

interface ITransaction {
    transactionId: number,
    transactionVendor: string,
    transactionImage?: string,
    transactionDate: Date,
    transactionAmount: number,
    transactionType: TransactionType
}

export const transactions : Array<ITransaction> = [
    {
        transactionId: 1,
        transactionVendor: "Salary",
        transactionImage: "https://example.com/image3.jpg",
        transactionDate: new Date("2023-01-01"),
        transactionAmount: 7000.00,
        transactionType: TransactionType.Income
    },
    {
        transactionId: 6,
        transactionVendor: "Amazon",
        transactionImage: "https://example.com/image1.jpg",
        transactionDate: new Date("2023-01-15"),
        transactionAmount: 120.50,
        transactionType: TransactionType.Expense
    },
    {
        transactionId: 2,
        transactionVendor: "Walmart",
        transactionDate: new Date("2023-02-20"),
        transactionAmount: 89.99,
        transactionType: TransactionType.Expense
    },
    {
        transactionId: 3,
        transactionVendor: "Apple",
        transactionImage: "https://example.com/image2.jpg",
        transactionDate: new Date("2023-03-05"),
        transactionAmount: 1999.99,
        transactionType: TransactionType.Expense
    }
]