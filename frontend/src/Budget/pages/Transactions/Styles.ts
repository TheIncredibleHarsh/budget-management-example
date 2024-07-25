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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Filter = styled.div`
    background: #fafafa;
    height: 200px;
    width: 450px;
    position: relative;
    left: 300px;
    top: 127px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
`

export const FilterGroup = styled.div`
    width: 350px;
    border: 1px solid rgba(0,0,0,0.1);
    min-height: 75px;
    border-radius: 15px;
    position: absolute;
`
