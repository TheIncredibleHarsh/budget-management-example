import styled from "styled-components";
import { modalWidth } from "../../../data";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${modalWidth.sm}px;
`

export const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 3;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 20px 20px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 20px;
    justify-content: center;
    /* outline: 1px solid red; */
`