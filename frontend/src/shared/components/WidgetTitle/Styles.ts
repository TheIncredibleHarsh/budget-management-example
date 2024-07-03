import styled from "styled-components"
import { color } from "../../data"

export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 8px;
    height: fit-content;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    color: ${color.accentSecondary};
`

export const StyledSpan = styled.span`
    font-size: 22px;
`