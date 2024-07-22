import styled from "styled-components";

export const LoadingScreenContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lato-black";
    font-size: 32px;
`