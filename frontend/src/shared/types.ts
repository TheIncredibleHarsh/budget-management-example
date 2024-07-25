export type LookupData = {
    id: number,
    name: string,
}

export type IndexItemColumn = {
    name: string,
    key: string,
    width: number
}

export type Transaction = {

}

export type TransactionFilter = {
    [key: string]: boolean | string | number | undefined,
    income            :boolean,
    expense           :boolean,
    vendor            :string,
    transactionType   :number | undefined,
    paymentMode       :number | undefined
}