import styled from "styled-components";
import { size } from "../../data";

export const StyledIcon =  styled.div`
`

export const StyledSpan = styled.span`
    font-family: "icon-font";
    color: ${props => props.color};
    font-size: ${size.navbarIconSize}px;
`