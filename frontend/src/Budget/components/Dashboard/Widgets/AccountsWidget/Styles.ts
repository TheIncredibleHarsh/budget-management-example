import styled from "styled-components";
import { color } from "../../../../../shared/data";

export const StyledContainer = styled.div`
    /* height: 100%; */
    height: 200px;
    width: 100%;
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    transition: all 0.5s;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`

export const AccountTypeInfo = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 15px;
`

export const AccountInfo = styled.div`
    width: 300px;
    flex-shrink: 0;
    scroll-snap-align: start;
    display: flex;
    flex-direction: row;
    position: relative;
`

export const AccountLogo = styled.div`
    height: 100px;
`

export const AccountInfoTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    margin-left: -15px;
`

export const AccountType = styled.span`
    color: #8a8a8a;
`

export const AccountProviderName = styled.span`
    color: ${color.accentSecondary};
    font-family: "Lato-black";
    font-size: 24px;

`

export const AccountBalanceInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 12px;
    top: 10px;
`
export const AccountBalance = styled.span`
    color: ${ color.accentPrimary};
    font-size: 24px;
    font-family: "Lato-black";
    text-align: right;

`
export const AccountBalanceInsight = styled.span`
    color: #8a8a8a;
    font-size: 12px;
`

export const CarousalButton = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 100%;
    top: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: "Lato-black";
    background: #efebff;
    opacity: 0.2;
    z-index: 10;
    box-shadow: 0 0 5px rgba(0,0,0,0.6);
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`

export const CarousalButtonLeft = styled(CarousalButton)`
    left: 7px;
    position: absolute;
`

export const CarousalButtonRight = styled(CarousalButton)`
    right: 7px;
    position: absolute;
`

export const CarousalContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`