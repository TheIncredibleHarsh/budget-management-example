import { ChangeEvent, useEffect, useState } from "react";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import { IndexFilterContainer, IndexList, IndexListContainer, PaginationContainer } from "./Styles";
import Icon from "../../../shared/components/Icon";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Button from "../../../shared/components/Button";
import { Pagination } from "@mui/material";
import { TAccount, TCard } from "../../../shared/types";
import { useLocation, useSearchParams } from "react-router-dom";
import useAccountsApi from "../../../shared/hooks/useAccountsApi";
import AccountsList from "./AccountsList";

const Accounts = () => {

    const PAGE_SIZE = 5

    const {setModalOpen} = useOpenModal();
    const {fetchAccounts} = useAccountsApi();
    const [data, setData] = useState(new Array<TAccount>)
    const [count, setCount] = useState(0)
    const [searchParams, setSearchParams] = useState(new URLSearchParams([['limit', PAGE_SIZE.toString()], ['offset', '0']]))
    // const [currentSearchParams, _] = useSearchParams()
    const location = useLocation()

    const openCreateModal = () => {
        setModalOpen("createAccount")
    }

    const handlePaginationChange = (e:ChangeEvent<unknown>, page: number) => {
        const param = searchParams
        param.set('offset', ((page-1)*PAGE_SIZE).toString())
        setSearchParams(new URLSearchParams(param))
    }

    const fetchAccountsList = () => {
        fetchAccounts(searchParams).then((result) => {
            setData(result.accounts)
            setCount(result.count)
        })
    }

    useEffect(() => {
        fetchAccountsList()
    }, [searchParams, location])

    const createButtonParams = {
        size: 190, 
        type: 'success', 
        value: <><Icon type="plus-small" />{"Create Account"}</>,
        handleOnClick: openCreateModal
    }

    return (
        <PageContainer>
            <StyledContainer>
                <Header title={useCurrentLocation()}/>
                <IndexListContainer>
                    <IndexFilterContainer>
                        <Button {...createButtonParams} />
                    </IndexFilterContainer>
                    <IndexList>
                        <AccountsList data={data} />
                    </IndexList>
                    <PaginationContainer>
                        <Pagination count={Math.ceil(count/PAGE_SIZE)} variant="outlined" shape="rounded" onChange={handlePaginationChange}/>
                    </PaginationContainer>
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Accounts;