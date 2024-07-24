import styled from "styled-components";

export const HeaderRow = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    background: #d1d1d1;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    column-gap: 15px;
    padding-left: 15px;
`
export const HeaderCell = styled.div`
    height: 60px;
    background: #d1d1d1;
    min-width: 150px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-right: 1px solid rgba(0,0,0,0.2)
`

export const RowCell = styled.div`
    height: 70px;
    background: #FAFAFA;
    min-width: 150px;
    max-width: 150px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-right: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
`

export const ListRow = styled.div`
    height: 70px;
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    padding-left: 15px;
    background: #FAFAFA;
    &:hover ${RowCell}{
        background: rgba(0,0,0,0.01);
    }
    &:hover {
        background: rgba(0,0,0,0.01);
        outline: 1px solid rgba(0,0,0,0.1)
    }
    color: #1d2025;
    /* letter-spacing: 1px; */
    &:last-child {
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
`

export const ColorIndicator = styled.div`
    background: ${props => props.color ? props.color : '#d1d1d1'};
    min-width: 10px;
    border-radius: 9px;
    margin: 2px 1px;
`
