// Move this to Types file

export type Transaction = {
    id: number,
    transactionAmount: number | string,
    paymentMethod: any,
    paymentMethodId: number,
    transactionDate: Date | string,
    transactionType: any,
    transactionTypeId: number,
    transactionVendor: string,
    transactionCategory: any,
    transactionCategoryId: number,
    comments: string
}