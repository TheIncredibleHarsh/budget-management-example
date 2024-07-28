import styled from "styled-components";
import { color } from "../../../../shared/data";

export const ListContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`

export const AccountItemContainer = styled.div`
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 9px;

    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    
    &:hover{
        background: rgba(0,0,0,0.05);
    }
`

export const AccountItemInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-top: 5px;
`

export const AccountHolder = styled.span`
    font-family: 'Lato-regular';
    font-size: 14px;
    color:   #57606a ;
`
export const AccountNumber = styled.span`
    font-family: 'Lato-light';
    font-size: 14px;
    color:  #57606a;
`

export const AccountBank = styled.span`
    font-family: 'Lato-regular';
    font-size: 32px;
    color:  #57606a;
`

export const BranchCode = styled.span`
    font-family: 'Lato-regular';
    font-size: 14px;
    color:  #57606a;
`

export const SwiftCode = styled.span`
    font-family: 'Lato-light';
    font-size: 12px;
    color:  #57606a;
`

export const AccountBalanceInfo = styled.div`
    display: flex;
    flex-direction: column;
    right: 12px;
    top: 10px;
    width: 150px;
    color: white;
`

export const AccountBalance = styled.span`
    color: ${ color.accentPrimary};
    font-size: 24px;
    font-family: "Lato-black";
    text-align: right;

`
