import styled from "styled-components";

export const ReportDataRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 2px;
    justify-content: space-between;
    align-items: center;
`

export const ReportTexts = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 8px;
    width: 140px;
    justify-content: center;
`

export const ReportValue = styled.span`
    font-family: 'Lato-regular';
    font-size: 18px;
`

export const ReportType = styled.span`
    font-size: 11px;
    letter-spacing: 1px;
`

export const ReportData = styled.div`
    display: flex;
    flex-direction: row;
    width:125px;
    align-items: center;
    margin-left: 10px;
`
export const ReportIconContainer = styled.div`
    display: flex;
    border-radius: 100%;
    overflow: hidden;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`

export const StyledCanvas = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1;
    overflow: hidden;
    scale: 1.4
`