import styled from "styled-components";
import { color, size } from "../../../shared/data";

export const NavbarContainer = styled.div`
    display: inline-block;
    background: ${color.backgroundLighest};
    position: fixed;
    left: ${size.navbarWidth}px;
    height: 100vh;
    width: ${size.navbarWidth}px;
    transition: all 0.2s;
    box-shadow: inset 0px 0 5px rgba(0, 0, 0, 0.6);
    padding: 10px 0 10px 0;
    border-right: 1px solid #d7ccff;
    -webkit-transition: all 0.2s ease;
    z-index: 10;
    /* &:hover{
        width: 200px;
    } */
`

export const LinkItem = styled.div`
    display: flex;
    flex-direction: row;
    padding:2px 0 0 8px;
    text-decoration: none;
    margin: 0 2px 0 2px;
    &:hover {
        border-radius: 3;
        /* border: 1px solid #d7ccff; */
        box-shadow: 0 0 0 2px #bba8ff;
    }
`

export const ItemText = styled.div`
    display: flex;
    align-items: center;
    color: #6e7781;
    padding: 2px 0 0 6px;
`

export const EmptyContainer = styled.div`
    height: 160px;
`