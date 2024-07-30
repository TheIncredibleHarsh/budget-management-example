import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin: 10px 10px 10px 330px;
    background: #f5f6f7;
    border-radius: 9px;
    border: 1px solid #d7ccff;
    height: calc(100vh - 22px);
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 1px solid #d7ccff;
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

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 9px;
    border: 1px solid rgba(0,0,0,0.1);
    margin: 10px;
    align-items: center;
    row-gap: 20px;
    position: relative;

    &:hover ${EditButton} {
        display: flex;
    }
`

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    line-height: 1.5;
`
export const ProfileTextSpan = styled.span`
    font-family: 'Lato-black';
    font-size: 14px;
    color:  #57606a;
    font-size: 22px;
`
export const ProfileTextSubText = styled.span`
    font-size: 14px;
    color:  #6e7781;
`

export const ProfileItemLabel = styled.span`
    font-size: 13px;
    color:  #8c959f;
`
export const ProfileItemText = styled.span`
    font-size: 14px;
    color:  #57606a;
`
export const ProfileInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`
export const EditInput = styled.input`
    width: 200px;
    border-radius: 9px;
    border: 1px solid #d7ccff;
    padding: 5px;
    margin-top: 10px;
    display: block;
`