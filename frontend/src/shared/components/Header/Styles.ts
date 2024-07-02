import styled from "styled-components";
import { color } from "../../data";

export const StyledHeader = styled.div`
    padding: 2px 0 0 8px;
    height: 50px;
    top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderText = styled.div`
    font-family: 'Lato-regular';
    font-size: 28px;
    color: ${color.accentSecondary};
`

export const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StyledTextInput = styled.input`
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, 0.2);
    height: 24px;
    &:focus {
        border-color: ${color.accentPrimary};
        box-shadow: 0 0 5px ${color.accentPrimary}
    }
    margin: 0 8px 0 0;
`