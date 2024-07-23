import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import useOpenModal from "../../../../../shared/hooks/useOpenModal";
import { WidgetContainerSm } from "../Styles"
import { ListContainer, ListItem, StyledImg, TransactionAmount, TransactionAmountContainer, TransactionDate, TransactionImageContainer, TransactionTexts, TransactionVendorName } from "./Styles";

//Todo: remove this part and use common data
const TransactionsWidget =  () => {

    const {setModalOpen} = useOpenModal();

    const openCreateTransactionModal = () => {
        setModalOpen("createTransaction");
    }

    let transactions : Array<ITransaction> = [
        {
            transactionId: 1,
            transactionVendor: "Salary",
            transactionImage: "https://example.com/image3.jpg",
            transactionDate: new Date("2023-01-01"),
            transactionAmount: 2000.00,
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

    let widgetTitleProps = {
        title: "All Transactions",
        icon: "plus",
        handleCreateAction: openCreateTransactionModal
    }

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
                <TransactionDate>{transaction.transactionDate.toDateString()}</TransactionDate>
            </TransactionTexts>
            <TransactionAmountContainer>
                <TransactionAmount {...transactionAmountProps}>{transaction.transactionAmount}</TransactionAmount>
            </TransactionAmountContainer>
        </ListItem>
    )
}

export default TransactionsWidget;