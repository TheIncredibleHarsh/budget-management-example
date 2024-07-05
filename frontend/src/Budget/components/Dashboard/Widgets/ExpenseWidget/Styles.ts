import styled from "styled-components";
import { color } from "../../../../../shared/data";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ChartContainer = styled.div`
    display: flex;
    height: 200px;
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const ExpenseListContainer = styled.div`
    overflow: scroll;
    height: 200px;
    width: 50%;
`

export const ExpenseItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 30px;
`

export const ExpenseCategory = styled.span`
    font-size: 20x;
    text-transform: uppercase;
    color: ${color.accentSecondary};
    letter-spacing: 0.5px;
`

export const ExpenseSum = styled.span`
    font-size: 20x;
    color:  #1b1336;
`