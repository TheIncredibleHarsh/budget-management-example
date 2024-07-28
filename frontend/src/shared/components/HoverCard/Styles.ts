import styled from "styled-components";
import { color } from "../../data";

const generateRandomGradient = () => {
    let colorList = ['#FF36AB', '#ceff52', '#d32af5', '#26ff59', '#6E44FF', '#FF36AB']
    shuffle(colorList)
    return `conic-gradient(at 30% 30%, ${colorList[0]}, ${colorList[1]}, ${colorList[2]}, ${colorList[3]}, ${colorList[4]}, ${colorList[5]})`
}

function shuffle(array:string[]) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

export const StyledCard = styled.div`
    height: 140px;
    width: 270px;
    background-image: ${generateRandomGradient()};
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
    letter-spacing: 0.5px;
    font-family: 'Lato-black';
    color: ${color.backgroundLighest};
    font-size: 14px;
`

export const CardExpiration = styled.span`
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