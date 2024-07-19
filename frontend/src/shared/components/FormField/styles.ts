import styled from "styled-components";
import { color } from "../../data";
import { Select } from "@mui/material";

export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    /* outline: 1px solid red; */
`

export const FormFieldLabel = styled.span`
    margin-top: 5px;
    margin-bottom: 2px;
    /* margin-left: 5px; */
    font-family: "Lato-light";
`

export const FormFieldInput = styled.input`
    font-family: "Lato-light";
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    height: 35px;
    width: 300px;
    &:focus {
        outline: solid 2px ${color.accentSecondary};
        &:hover {
            border: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
    &:hover {
        cursor: pointer;
        /* outline: solid 2px rgba(0, 0, 0, 0.4); */
        border: 1px solid black;
    }
`

export const StyledTextArea = styled.textarea`
    resize: none;
    width: 300px;
    height: 100px;
    font-family: "Lato-regular";
    &:focus {
        outline: solid 2px ${color.accentSecondary};
        &:hover {
            outline: solid 2px ${color.accentSecondary};
        }
    }
    &:hover {
        cursor: pointer;
        outline: 1px solid rgba(0, 0, 0, 0.2);
    }
`

export const StyledSelect = styled(Select)`
    height: 38px;
    width: 308px;    
    &:hover fieldset {
        /* outline: solid 2px rgba(0, 0, 0, 0.4); */
    }
    &.Mui-focused fieldset {
        outline: solid 2px ${color.accentSecondary};
        border: none
    }
`