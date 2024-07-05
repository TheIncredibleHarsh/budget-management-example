import styled from "styled-components";
import { color } from "../../data";

export const StyledCard = styled.div`
    height: 140px;
    width: 270px;
    background-image: conic-gradient(at 30% 30%, #FF36AB, #ceff52, #d32af5, #26ff59, #6E44FF, #FF36AB);
    backdrop-filter: blur(30) !important;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
    transform-style: preserve-3d;
    &:hover {
        scale: 1.05;
    }
`

export const CardBackdropFilter = styled.div`
    position: relative;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    height: 100%;
    width: 100%;
    z-index: 1;
`
export const CardType = styled.span`
    position: relative;
    top: 20px;
    left: 200px;
    font-family: 'Lato-black';
    color: ${color.accentSecondary};
`

export const CardNumber = styled.span`
    position: relative;
    top: 100px;
    left: -20px;
    letter-spacing: 1px;
    font-family: 'Lato-black';
    color: ${color.backgroundLighest};
`

export const CardAmount = styled.span`
    position: relative;
    top: 50px;
    right: 13px;
    font-family: 'Lato-black';
    color: ${color.backgroundLighest};
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${StyledCard}:not(:first-child) {
        margin-top: -130px;
    }

    &:hover {
        ${StyledCard} {
            transform: rotateX(50deg);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        }

        ${StyledCard}:not(:first-child) {
            margin-top: -120px;
        }
    }
`