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
    [key: string]       :boolean | string | number | undefined,
    income              :boolean,
    expense             :boolean,
    vendor              :string,
    transactionType     :number | undefined,
    paymentMode         :number | undefined
}

export type TCard = {
    cardName            :string,
    cardNumber          :string,
    cardHolderName      :string,
    expirationMonth     :number,
    expirationYear      :number,
    cvv                 :number,
    currentBalance      :number,
    limit               :number
}

export type TAccount = {
    accountHolder       :string,
    accountNumber       :string,
    bankName            :string,
    branchCode          :string,
    swiftCode           :string,
    currentBalance      :number
}