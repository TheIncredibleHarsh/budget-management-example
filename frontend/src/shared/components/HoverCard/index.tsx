import { TCard } from "../../types"
import { CardBackdropFilter, StyledCard, CardType, CardNumber, CardExpiration, Cards } from "./Styles"

const HoverCard = ({cards}: {cards: TCard[]}) => {
    return (
        <Cards>
            {cards.map(card => generateCardItem(card))}
        </Cards>
    )
}

const generateCardItem = (card: any) => {
    const cardPresenter = {
        cardType: card.cardNumber.startsWith('4') ? 'VISA' : (card.cardNumber.startsWith('5') ? 'MASTER CARD' : 'RUPAY'),
        cardNumber: card.cardNumber.replace(/(?<!^..).(?=.{3})/g, '*'),
        cardExpiration: `${card.expirationMonth}/${card.expirationYear}`
    }
    return (
        <StyledCard>
            <CardBackdropFilter>
                <CardType>{cardPresenter.cardType}</CardType>
                <CardNumber>{cardPresenter.cardNumber}</CardNumber>
                <CardExpiration>{cardPresenter.cardExpiration}</CardExpiration>
            </CardBackdropFilter>
        </StyledCard>
    )
}

export default HoverCard;