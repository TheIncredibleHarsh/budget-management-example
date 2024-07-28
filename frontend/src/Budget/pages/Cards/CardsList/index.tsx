import { CardExpiration, CardBackdropFilter, CardNumber, CardType, StyledCard } from "../../../../shared/components/HoverCard/Styles"
import { TCard } from "../../../../shared/types"
import { ListContainer, CardItemContainer, CardInfo, CardName, ValidTill } from "./Styles"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardsList =  ({data}: {data: TCard[]}) => {
    const card = data[0]
    if(card == undefined){
        return (<>
            <CardItemContainer>
                <CardDisplay card={card}/>
                    <CardInfo>
                        <CardName><Skeleton /></CardName>
                        <ValidTill><Skeleton /></ValidTill>
                </CardInfo>
            </CardItemContainer>
            <CardItemContainer>
                <CardDisplay card={card}/>
                    <CardInfo>
                        <CardName><Skeleton /></CardName>
                        <ValidTill><Skeleton /></ValidTill>
                </CardInfo>
            </CardItemContainer>
            <CardItemContainer>
                <CardDisplay card={card}/>
                    <CardInfo>
                        <CardName><Skeleton /></CardName>
                        <ValidTill><Skeleton /></ValidTill>
                </CardInfo>
            </CardItemContainer>
        </>)
    }
    return (
        <ListContainer>
            {generateCardItems(data)}
        </ListContainer>
    )

}

const generateCardItems:(cards:TCard[]) => JSX.Element[] = (cards:TCard[]) => {

    let cardItems = new Array
    cards.forEach((card) => {
        cardItems.push(
        <CardItemContainer>
            <CardDisplay card={card}/>
            <CardInfo>
                <CardName>{card.cardName}</CardName>
                <ValidTill>{`valid till ${card.expirationMonth}/${card.expirationYear}`}</ValidTill>
            </CardInfo>
        </CardItemContainer>)
    })

    return cardItems
}

const CardDisplay = ({card}:{card:TCard}) => {
    if(card != undefined){
        let cardType = card.cardNumber.startsWith('4') ? 'VISA' : (card.cardNumber.startsWith('5') ? 'MASTER CARD' : 'RUPAY')
        return (
            <StyledCard>
                <CardBackdropFilter>
                    <CardType>{cardType}</CardType>
                    <CardNumber>{card.cardNumber}</CardNumber>
                    <CardExpiration>{`${card.expirationMonth}/${card.expirationYear}`}</CardExpiration>
                </CardBackdropFilter>
            </StyledCard>
        )
    } else {
        return <StyledCard>
                    <CardBackdropFilter>
                        <CardType><Skeleton /></CardType>
                        <CardNumber><Skeleton /></CardNumber>
                        <CardExpiration><Skeleton /></CardExpiration>
                    </CardBackdropFilter>
                </StyledCard>
    }
    
}

export default CardsList