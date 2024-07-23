import styled from "styled-components";

export const IndexListContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 140px);
    background: #FAFAFA;
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);

    display: flex;
    row-gap: 5px;
    flex-direction: column;
    padding: 20px 10px;
`

export const IndexFilterContainer = styled.div`
    height: 40px;
    border: 1px solid red;
`

export const IndexList = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 9px;
    flex: 1;
    overflow: hidden;
`

export const PaginationContainer = styled.div`
        border: 1px solid red;
        height: 40px;
`