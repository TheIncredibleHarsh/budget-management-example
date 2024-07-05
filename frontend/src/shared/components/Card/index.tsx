import { CardBackdropFilter, StyledCard, CardType, CardNumber, CardAmount, Cards } from "./Styles"

const Card = () => {
    return (
        <Cards>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardAmount>5432</CardAmount>
                </CardBackdropFilter>
            </StyledCard>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardAmount>5432</CardAmount>
                </CardBackdropFilter>
            </StyledCard>
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>VISA</CardType>
                    <CardNumber>1234 5678 8765 4321</CardNumber>
                    <CardAmount>5432</CardAmount>
                </CardBackdropFilter>
            </StyledCard>
        </Cards>
    )
}

export default Card;