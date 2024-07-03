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
};

const Icon = ({type, color}:{type: string, color?: string}) => {
    return (
        <StyledIcon>
            <StyledSpan color={color}>{iconMap[type]}</StyledSpan>
        </StyledIcon>
    )
}

export default Icon