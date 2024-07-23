import styled from "styled-components";

export const HeaderRow = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    background: #d1d1d1;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

export const HeaderCell = styled.div`
    height: 40px;
    background: #d1d1d1;
    width: ${props => props.width ? `${props.width}px` : `150px`};
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-left: 5px;
    border-right: 1px solid rgba(0,0,0,0.2)
`