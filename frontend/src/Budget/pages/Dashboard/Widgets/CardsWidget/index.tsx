import Card from "../../../../../shared/components/Card";
import WidgetTitle from "../../../../../shared/components/WidgetTitle"
import { WidgetContainerSm } from "../Styles"
import { StyledCardsContainer } from "./Styles";

const CardsWidget = () => {
    return (
        <WidgetContainerSm>
            <WidgetTitle title="Cards" icon="plus" />
            <StyledCardsContainer>
                <Card />    
            </StyledCardsContainer>
        </WidgetContainerSm>
    )
}

export default CardsWidget;