import { useEffect, useState } from "react";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import useTransactionsApi from "../../../shared/hooks/useTransactionsApi";
import IndexListHeader from "./IndexListHeader";
import { IndexFilterContainer, IndexList, IndexListContainer, PaginationContainer } from "./Styles";

const Transactions = () => {

    const headerColumns = [
        {width: 150, name: 'Amount'},
        {width: 150, name: 'Transaction Type'},
        {width: 150, name: 'Vendor name'},
        {width: 150, name: 'Payment Mode'}, 
        {width: 150, name: 'Date'}, 
    ]

    const {fetchTransactions} = useTransactionsApi();
    const [data, setData] = useState({})

    useEffect(() => {
        let dataColumns;
        fetchTransactions().then((transactions) => {
            console.log(transactions);
        })
    }, [])

    return (
        <PageContainer>
            <StyledContainer>
                <Header title={useCurrentLocation()}/>
                <IndexListContainer>
                    <IndexFilterContainer></IndexFilterContainer>
                    <IndexList>
                        <IndexListHeader columns={headerColumns}></IndexListHeader>
                    </IndexList>
                    <PaginationContainer></PaginationContainer>
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Transactions;