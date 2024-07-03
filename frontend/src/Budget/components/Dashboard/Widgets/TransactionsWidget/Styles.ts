import styled from "styled-components";

export const ListContainer = styled.div`
    margin: 10px 5px;
    padding: 4px 2px;
`

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 3px 0;
`

export const TransactionImageContainer = styled.div`
    overflow: hidden;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    margin: 2px;
`

export const StyledImg = styled.img`
    object-fit: contain;
    height: 25px;
`

export const TransactionTexts = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 4px;
    width: 140px;
`

export const TransactionVendorName = styled.span`
    font-family: 'Lato-regular';
`

export const TransactionDate = styled.span`
    font-size: 12px;
`

export const TransactionAmountContainer = styled.div`
    height: auto;
    width: 70px;
    display: flex;
    padding-right: 15px;
    justify-content: flex-end;
`

export const TransactionAmount = styled.span`
    color: ${props => `${props.color}`};
    font-weight: 400;
    font-size: 18px;
`