import { ChangeEvent, useEffect, useState } from "react";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import useTransactionsApi from "../../../shared/hooks/useTransactionsApi";
import IndexListContent from "./IndexListContent";
import { Filter, IndexFilterContainer, IndexList, IndexListContainer, PaginationContainer } from "./Styles";
import Icon from "../../../shared/components/Icon";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Button from "../../../shared/components/Button";
import TransactionFilter from "./TransactionFIlter";
import { TransactionFilter as FilterType} from "../../../shared/types";
import { Pagination } from "@mui/material";

const Transactions = () => {

    const headerColumns = [
        {width: 150, name: 'Amount',            key: 'transactionAmount',   filterOperators: [
            {key: 'eq', name: 'Equals'}, 
            {key: 'lt', name: 'Less Than'},
            {key: 'gt', name: 'More Than'}
        ]},
        {width: 150, name: 'Transaction Type',  key: 'transactionTypeId',   filterOperators: [
            {key: 'eq', name: 'Equals'}
        ]},
        {width: 150, name: 'Vendor name',       key: 'transactionVendor',   filterOperators: [
            {key: 'eq', name: 'Equals'},
            {key: 'contains', name: 'Contains'},
        ]},
        {width: 150, name: 'Payment Mode',      key: 'paymentMethodId',     filterOperators: [
            {key: 'eq', name: 'Equals'}
        ]}, 
        {width: 150, name: 'Date',              key: 'transactionDate',     filterOperators: [
            {key: 'eq', name: 'Equals'}, 
            {key: 'lt', name: 'Less Than'},
            {key: 'gt', name: 'More Than'}
        ]}, 
    ]
    const PAGE_SIZE = 10

    const {setModalOpen} = useOpenModal();
    const {fetchTransactions} = useTransactionsApi();
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [filterOpen, setFilterOpen] = useState(false)
    const [filter, setFilter] = useState<FilterType>()
    const [searchParams, setSearchParams] = useState(new URLSearchParams([['limit', PAGE_SIZE.toString()], ['offset', '0']]))

    const generateURLParams = () => {
        let param = searchParams;
        filter && Object.keys(filter).map((key) => {
            if (param.get(key)) {
                param.set(key, filter[key]?.toString() || "")
            } else {
                param.set(key, filter[key]?.toString() || "")
            }
        })
        // param.set(offset)
        setSearchParams(new URLSearchParams(param))
    }

    const openCreateModal = () => {
        setModalOpen("createTransaction")
    }

    const toggleFilterOpen = () => {
        const fOpen = filterOpen
        setFilterOpen(!fOpen)
    }
 
    const handlePaginationChange = (e:ChangeEvent<unknown>, page: number) => {
        const param = searchParams
        param.set('offset', ((page-1)*PAGE_SIZE).toString())
        setSearchParams(new URLSearchParams(param))
    }

    useEffect(() => {
        fetchTransactions(searchParams).then((transactions) => {
            setData(transactions.data)
            setCount(transactions.count)
        })
    }, [searchParams])

    useEffect(() => {
        generateURLParams()
    },[filter])

    const createButtonParams = {
        size: 190, 
        type: 'success', 
        value: <><Icon type="plus-small" />{"Create Transaction"}</>,
        handleOnClick: openCreateModal
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
                            <TransactionFilter onCloseHandler={toggleFilterOpen} onSaveHandler={setFilter} />
                        </Filter>
                        }
                        <Button {...createButtonParams} />
                        <Button {...filterButtonParams} />
                    </IndexFilterContainer>
                    <IndexList>
                        <IndexListContent columns={headerColumns} data={data}></IndexListContent>
                    </IndexList>
                    <PaginationContainer>
                        <Pagination count={Math.ceil(count/PAGE_SIZE)} variant="outlined" shape="rounded" onChange={handlePaginationChange}/>
                    </PaginationContainer>
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Transactions;