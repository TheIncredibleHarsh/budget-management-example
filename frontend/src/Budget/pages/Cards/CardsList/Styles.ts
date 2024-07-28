import styled from "styled-components";

export const CardItemContainer = styled.div`
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 9px;

    display: flex;
    flex-direction: row;
    column-gap: 10px;
    
    &:hover{
        background: rgba(0,0,0,0.05);
    }
`

export const ListContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`

export const CardInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-top: 5px;
`

export const CardName = styled.span`
    font-variant: small-caps;
    font-family: 'Lato-regular';
    font-size: 32px;
    color:   #57606a ;
`

export const ValidTill = styled.span`
    font-family: 'Lato-light';
    font-size: 14px;
    color:  #57606a;
`