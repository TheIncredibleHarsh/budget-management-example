import styled from "styled-components";
import { color } from "../data";

export const PageContainer = styled.div`
    height: 100vh;
    position: absolute;
    left: 0;
    width: 100vw;
`
export const StyledContainer =  styled.div`
    margin: 30px 20px 0 170px;
    position: relative;
`

export const Tag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: linear-gradient(45deg, ${color.accentPrimary}, ${color.accentSecondary});
    height: 20px;
    width: fit-content;
    padding: 3px 10px;
    color: #fafafa;
    font-size: 14px;
`