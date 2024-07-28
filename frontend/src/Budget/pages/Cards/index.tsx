import { ChangeEvent, useEffect, useState } from "react";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import { IndexFilterContainer, IndexList, IndexListContainer, PaginationContainer } from "./Styles";
import Icon from "../../../shared/components/Icon";
import useOpenModal from "../../../shared/hooks/useOpenModal";
import Button from "../../../shared/components/Button";
import { Pagination } from "@mui/material";
import useCardsApi from "../../../shared/hooks/useCardsApi";
import CardsList from "./CardsList";
import { TCard } from "../../../shared/types";
import { useLocation, useSearchParams } from "react-router-dom";

const Cards = () => {

    const PAGE_SIZE = 5

    const {setModalOpen} = useOpenModal();
    const {fetchCards} = useCardsApi();
    const [data, setData] = useState(new Array<TCard>)
    const [count, setCount] = useState(0)
    const [searchParams, setSearchParams] = useState(new URLSearchParams([['limit', PAGE_SIZE.toString()], ['offset', '0']]))
    // const [currentSearchParams, _] = useSearchParams()
    const location = useLocation()

    const openCreateModal = () => {
        setModalOpen("createCard")
    }

    const handlePaginationChange = (e:ChangeEvent<unknown>, page: number) => {
        const param = searchParams
        param.set('offset', ((page-1)*PAGE_SIZE).toString())
        setSearchParams(new URLSearchParams(param))
    }

    const fetchCardsList = () => {
        fetchCards(searchParams).then((cards) => {
            setData(cards.data)
            setCount(cards.count)
        })
    }

    useEffect(() => {
        fetchCardsList()
    }, [searchParams, location])

    const createButtonParams = {
        size: 190, 
        type: 'success', 
        value: <><Icon type="plus-small" />{"Create Card"}</>,
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
                        <CardsList data={data} />
                    </IndexList>
                    <PaginationContainer>
                        <Pagination count={Math.ceil(count/PAGE_SIZE)} variant="outlined" shape="rounded" onChange={handlePaginationChange}/>
                    </PaginationContainer>
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Cards;