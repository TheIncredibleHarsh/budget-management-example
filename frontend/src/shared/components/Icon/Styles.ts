import styled from "styled-components";
import { size } from "../../data";

export const StyledIcon =  styled.div`
    cursor: pointer;
`

export const StyledSpan = styled.span`
    font-family: "icon-font";
    color: ${props => props.color};
    font-size: ${(props : {size?:number, color?:string }) => 
                   ( props.size == null) ? `${size.navbarIconSize}px` : `${props.size}px`};
`