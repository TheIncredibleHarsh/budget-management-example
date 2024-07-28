import HoverCard from "../../../../../shared/components/HoverCard";
import WidgetTitle from "../../../../../shared/components/WidgetTitle"
import useOpenModal from "../../../../../shared/hooks/useOpenModal";
import { WidgetContainerSm } from "../Styles"
import { StyledCardsContainer } from "./Styles";

const CardsWidget = () => {

    const {setModalOpen} = useOpenModal()

    const openCreateTransactionModal = () => {
        setModalOpen("createCard");
    }
    
    let widgetTitleProps = {
        title: "All Cards",
        icon: "plus",
        handleCreateAction: openCreateTransactionModal
    }    
    
    return (
        <WidgetContainerSm>
            <WidgetTitle {...widgetTitleProps} />
            <StyledCardsContainer>
                <HoverCard />    
            </StyledCardsContainer>
        </WidgetContainerSm>
    )
}

export default CardsWidget;