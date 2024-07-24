import { Select } from "@mui/material";
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
    display: flex;
    column-gap: 5px;
    justify-content: flex-end;
    align-items: center;
`

export const IndexList = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 9px;
    flex: 1;
    overflow-y: hidden;
`

export const PaginationContainer = styled.div`
        border: 1px solid red;
        height: 40px;
`

export const Filter = styled.div`
    background: #fafafa;
    height: 100px;
    width: 400px;
    position: relative;
    left: 300px;
    top: 72px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FilterGroup = styled.div`
    width: 350px;
    border: 1px solid rgba(0,0,0,0.1);
    min-height: 75px;
    border-radius: 15px;
`

export const StyledSelect = styled(Select)`
    height: 25px;
    position: relative;
    bottom: 0px;
`