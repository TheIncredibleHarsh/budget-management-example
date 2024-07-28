import { useEffect, useState } from "react";
import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import useOpenModal from "../../../../../shared/hooks/useOpenModal";
import useTransactionsApi from "../../../../../shared/hooks/useTransactionsApi";
import { WidgetContainerSm } from "../Styles"
import { ListContainer, ListItem, StyledImg, TransactionAmount, TransactionAmountContainer, TransactionDate, TransactionImageContainer, TransactionTexts, TransactionVendorName } from "./Styles";

//Todo: remove this part and use common data
const TransactionsWidget =  () => {

    const {setModalOpen} = useOpenModal();
    const {fetchTransactions} = useTransactionsApi();
    const [transactions, settransations] = useState<Array<ITransaction>>([]);


    const openCreateTransactionModal = () => {
        setModalOpen("createTransaction");
    }

    let widgetTitleProps = {
        title: "All Transactions",
        icon: "plus",
        handleCreateAction: openCreateTransactionModal
    }

    useEffect(() => {
        const searchParams = new URLSearchParams();
        searchParams.set('limit', '4');
        searchParams.set('offset', '0');
        fetchTransactions(searchParams).then(result => {
            settransations(result.data);
        })
    }, [])

    return (
        <WidgetContainerSm>
            <WidgetTitle {...widgetTitleProps}/>
            <ListContainer>
                {transactions.map(transaction => returnTransactionItem(transaction))}
            </ListContainer>
        </WidgetContainerSm>
    )
}

enum TransactionType {
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


const returnTransactionItem = (transaction:ITransaction) => {
    const transactionAmountProps = {
        color: transaction.transactionType === TransactionType.Income ? "green" : "red"
    }
    return (
        <ListItem>
            <TransactionImageContainer>
                <StyledImg src="logo-amazon.jpg" />
            </TransactionImageContainer>
            <TransactionTexts>
                <TransactionVendorName>{transaction.transactionVendor}</TransactionVendorName>
                <TransactionDate>{new Date(transaction.transactionDate).toDateString()}</TransactionDate>
            </TransactionTexts>
            <TransactionAmountContainer>
                <TransactionAmount {...transactionAmountProps}>{transaction.transactionAmount}</TransactionAmount>
            </TransactionAmountContainer>
        </ListItem>
    )
}

export default TransactionsWidget;