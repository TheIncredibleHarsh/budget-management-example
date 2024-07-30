import { MenuItem } from "@mui/material";
import styled from "styled-components";
import Icon from "../../../../shared/components/Icon";

export const AppSettingsContainer = styled.div`
    margin: 10px 10px 10px 330px;
    background: #f5f6f7;
    border-radius: 9px;
    border: 1px solid #d7ccff;
    height: calc(100vh - 22px);
`

export const EditButton = styled.div`
    height: 30px;
    width: 70px;
    border-radius: 9px;
    border: 1px solid #d7ccff;
    position: absolute;
    right: 10px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const SettingsSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 9px;
    border: 1px solid rgba(0,0,0,0.1);
    margin: 10px;
    align-items: center;
    position: relative;

    &:hover ${EditButton} {
        display: flex;
    }
`

export const SectionHeader = styled.div`
    padding: 20px 0 0 20px;
`

export const SectionHeaderText = styled.span`
    font-size: 14px;
    color:  #57606a;
    font-weight: 500;
`

export const SettingsSubSection = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    padding: 20px 0;

    &:hover {
        border-bottom: 1px solid rgba(0,0,0,0.1);;
        border-top: 1px solid rgba(0,0,0,0.1);;
        margin: -1px 0px;
    }

    &:hover ${EditButton} {
        display: flex;
    }
`

export const SettingsAction = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    flex: 1;

    &:hover ${EditButton} {
        display: flex;
    }
`

export const SettingsActionText = styled.span`
    font-size: 18px;
    color:  #57606a;
    font-weight: 600;
`

export const SettingsActionSubText = styled.span`
    font-size: 12px;
    color:  #57606a; 
`

export const SettingsData = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 200px;
`

export const ListDisplay = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    outline: 1px solid rgba(0,0,0,0.1);
    background: rgba(0,0,0,0.03);
    border-radius: 3px;
`

export const ListDeleteIcon = styled.div`

`

export const ListItem = styled(MenuItem)`
    display: flex;
    z-index: 5;
    flex-direction: row;
    align-items: center;
    justify-content: space-between !important;
    background: #f5f6f7 !important;
    outline: 1px solid rgba(0,0,0,0.1) !important;
    color: #57606a !important;
    width: 100%;
    height: 35px;

    &:hover {
        background: rgba(0,0,0,0.01) !important;
    }

    ${ListDeleteIcon} {
        display: none;
    }

    &:hover ${ListDeleteIcon} {
        display: flex;
    }
`

export const ListItemText = styled.span`
    font-size: 14px;
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 5px;
    min-width: 190px;
    max-width: 190px;
    height: 100px;
    outline: 1px solid rgba(0,0,0,0.1);
    background: rgba(0,0,0,0.03);
    border-radius: 3px;
    padding: 5px;
`