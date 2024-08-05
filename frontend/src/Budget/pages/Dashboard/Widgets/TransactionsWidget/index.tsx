import { useEffect, useState } from "react";
import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import useOpenModal from "../../../../../shared/hooks/useOpenModal";
import useTransactionsApi from "../../../../../shared/hooks/useTransactionsApi";
import { WidgetContainerSm } from "../Styles"
import { ListContainer, ListItem, StyledImg, TransactionAmount, TransactionAmountContainer, TransactionDate, TransactionImageContainer, TransactionTexts, TransactionVendorName } from "./Styles";
import Skeleton from "react-loading-skeleton";

//Todo: remove this part and use common data
const TransactionsWidget =  () => {

    const {setModalOpen} = useOpenModal();
    const {fetchTransactions} = useTransactionsApi();
    const [transactions, settransations] = useState<Array<ITransaction>>([]);
    const [isLoading, setIsLoading] = useState(true);


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
        setIsLoading(true)
        fetchTransactions(searchParams).then(result => {
            settransations(result.data);
            setIsLoading(false)
        })
    }, [])

    return (
        <WidgetContainerSm>
            <WidgetTitle {...widgetTitleProps}/>
            <ListContainer>
                {isLoading? <Skeleton height={30} count={5}/> : transactions.map(transaction => returnTransactionItem(transaction))}
            </ListContainer>
        </WidgetContainerSm>
    )
}


interface ITransaction {
    transactionId: number,
    transactionVendor: string,
    transactionImage?: string,
    transactionDate: Date,
    transactionAmount: number,
    transactionType: any
    transactionTypeId: number
}


const returnTransactionItem = (transaction:ITransaction) => {
    const transactionAmountProps = {
        color: transaction.transactionTypeId == 1 ? "green" : "red"
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