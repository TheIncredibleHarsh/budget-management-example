import { useEffect, useState } from "react";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import useTransactionsApi from "../../../shared/hooks/useTransactionsApi";
import IndexListContent from "./IndexListContent";
import { Filter, FilterGroup, IndexFilterContainer, IndexList, IndexListContainer, PaginationContainer, StyledSelect } from "./Styles";
import Icon from "../../../shared/components/Icon";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Button from "../../../shared/components/Button";

const Transactions = () => {

    const headerColumns = [
        {width: 150, name: 'Amount',            key: 'transactionAmount'},
        {width: 150, name: 'Transaction Type',  key: 'transactionTypeId'},
        {width: 150, name: 'Vendor name',       key: 'transactionVendor'},
        {width: 150, name: 'Payment Mode',      key: 'paymentMethodId'}, 
        {width: 150, name: 'Date',              key: 'transactionDate'}, 
    ]

    const {fetchTransactions} = useTransactionsApi();
    const [data, setData] = useState([])
    const [filterOpen, setFilterOpen] = useState(false)
    
    useEffect(() => {
        fetchTransactions().then((transactions) => {
            setData(transactions);
        })
    }, [])

    const {setModalOpen} = useOpenModal();

    const openCreateModal = () => {
        setModalOpen("createTransaction")
    }

    const toggleFilterOpen = () => {
        console.log("here")
        const fOpen = filterOpen
        setFilterOpen(!fOpen)
    }

    const createButtonParams = {
        size: 190, 
        type: 'success', 
        value: <><Icon type="plus-small" />{"Create Transaction"}</>,
        onClick: openCreateModal
    }

     const filterButtonParams = {
        value: "Filter",
        handleOnClick: toggleFilterOpen,
        status: filterOpen ? 'pressed' : ''
     }

    return (
        <PageContainer>
            <StyledContainer>
                <Header title={useCurrentLocation()}/>
                <IndexListContainer>
                    <IndexFilterContainer>
                        {filterOpen && <Filter>
                            <FilterGroup>
                            </FilterGroup>
                            {/* <StyledSelect /> */}
                        </Filter>
                        }
                        <Button {...createButtonParams} />
                        <Button {...filterButtonParams} />
                    </IndexFilterContainer>
                    <IndexList>
                        <IndexListContent columns={headerColumns} data={data}></IndexListContent>
                    </IndexList>
                    <PaginationContainer></PaginationContainer>
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Transactions;