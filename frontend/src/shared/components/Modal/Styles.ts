import styled from "styled-components";
import { color } from "../../data";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    backdrop-filter: blur(15px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContainer = styled.div`
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    position: relative;
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`

export const ModalTitle = styled.div`
    font-family: 'Lato-regular';
    color: ${color.accentSecondary};
    font-size: 24px;
    padding: 50px 0 0 20px;
    font-variant: small-caps;
    letter-spacing: 1px;
`
export const ModalCloseButton = styled.div`
    color: ${color.accentSecondary};
    padding: 50px 12px 0 0;
`

export const ModalBodyContainer = styled.div`
    padding: 12px 8px;
    overflow-y: scroll;
    height: calc(100% - (50px + 24px + 60px));
`