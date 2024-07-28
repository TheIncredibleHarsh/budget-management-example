import { size } from "../../data";
import { StyledIcon, StyledSpan } from "./Styles";

interface IHash {
    [key: string]: string;
}

const iconMap: IHash = {
     ['dashboard']: "\uebe0",
     ['cards']: "\uebdf",
     ['accounts']: "\uebc5",
     ['transactions']: "\uec67",
     ['settings']: "\uec16",
     ['about']: "\uebf8",
     ['search']: "\uec15",
     ['plus']: "\ue995",
     ['up-arrow']: "\ueb5e",
     ['down-arrow']: "\ueb61",
     ['dollar']: "\ue9fb",
     ['plus-small']: "\ue992",
     ['account']: "\uebc7",
     ['app-settings']: "\uec17",
     ['notification']: "\uecd5",
};

const Icon = ({type, color, size, handleOnClick}:{type: string, color?: string, size?: number, handleOnClick?:any}) => {
    
    let iconParams = {
        color: color,
        size: size
    }
    
    return (
        <StyledIcon onClick={handleOnClick}>
            <StyledSpan {...iconParams}>{iconMap[type]}</StyledSpan>
        </StyledIcon>
    )
}

export default Icon