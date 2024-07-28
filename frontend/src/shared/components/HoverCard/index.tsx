import { CardBackdropFilter, StyledCard, CardType, CardNumber, CardExpiration, Cards } from "./Styles"

const HoverCard = () => {
    return (
        <Cards>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardExpiration>5432</CardExpiration>
                </CardBackdropFilter>
            </StyledCard>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardExpiration>5432</CardExpiration>
                </CardBackdropFilter>
            </StyledCard>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardExpiration>5432</CardExpiration>
                </CardBackdropFilter>
            </StyledCard>
        </Cards>
    )
}

export default HoverCard;