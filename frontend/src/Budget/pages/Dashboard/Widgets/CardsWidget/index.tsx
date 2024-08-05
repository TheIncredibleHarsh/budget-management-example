import { useEffect, useState } from "react";
import HoverCard from "../../../../../shared/components/HoverCard";
import WidgetTitle from "../../../../../shared/components/WidgetTitle"
import useCardsApi from "../../../../../shared/hooks/useCardsApi";
import useOpenModal from "../../../../../shared/hooks/useOpenModal";
import { WidgetContainerSm } from "../Styles"
import { StyledCardsContainer } from "./Styles";
import { TCard } from "../../../../../shared/types";
import Skeleton from "react-loading-skeleton";

const CardsWidget = () => {

    const {setModalOpen} = useOpenModal()
    const {fetchCards} = useCardsApi();
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState<TCard[]>([]);

    const openCreateTransactionModal = () => {
        setModalOpen("createCard");
    }
    
    let widgetTitleProps = {
        title: "All Cards",
        icon: "plus",
        handleCreateAction: openCreateTransactionModal
    }

    useEffect(() => {
        const searchParams = new URLSearchParams();
        searchParams.set('limit', '3');
        searchParams.set('offset', '0');
        setIsLoading(true)
        fetchCards(searchParams).then(result => {
            setCards(result.data)
            setIsLoading(false)
        })
    }, [])
    
    return (
        <WidgetContainerSm>
            <WidgetTitle {...widgetTitleProps} />
            {isLoading ? <Skeleton height={190} count={1}/> : 
            <StyledCardsContainer>
                <HoverCard cards={cards}/>
            </StyledCardsContainer>}
        </WidgetContainerSm>
    )
}

export default CardsWidget;