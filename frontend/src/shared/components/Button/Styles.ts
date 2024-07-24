import styled from "styled-components";
import { color } from "../../data";

export const StyledButton = styled.div`
    height: 35px;
    width: ${props => props.size != null ? `${props.size}` : '100'}px;    
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 1px solid rgba(0,0,0,0.3);
    cursor: pointer;

    &:hover {
        background: rgba(0,0,0,0.1)
    }

    &:active {
        background: rgba(0,0,0,0.3)
    }

    ${
        props => props.status == 'pressed' ? `
            background: rgba(0,0,0,0.3);
            &:hover {
                background: rgba(0,0,0,0.3)
            }
        ` : ``
    }
`

export const SuccessButton = styled(StyledButton)`
    background: ${color.accentSecondary};
    &:hover {
        background: ${color.accentSecondaryHover}
    }

    &:active {
        background: ${color.accentSecondaryActive}
    }
    color: white;
    outline: none;

`