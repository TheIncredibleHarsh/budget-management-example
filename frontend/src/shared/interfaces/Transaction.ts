// Move this to Types file

export type Transaction = {
    id: number,
    transactionAmount: number | string,
    paymentMethodId: number,
    transactionDate: Date | string,
    transactionTypeId: number,
    transactionVendor: string,
    comments: string
}