import { ReactElement } from "react";
import { SuccessButton, StyledButton } from "./Styles";

const Button = (
    {
        type, 
        value, 
        size,
        status, 
        handleOnClick,
        handleOnMouseEnter,
        handleOnMouseOut
    }: 
    {
        type?: string, 
        value: string | ReactElement, 
        size?: number,
        status?: string,
        handleOnClick?:(transaction: any) => void, 
        handleOnMouseEnter?:(transaction: any) => void, 
        handleOnMouseOut?:(transaction: any) => void, 
    }
) => {
    const buttonParams = {
        type: type,
        size: size,
        status: status
    }

    switch(type){
        case 'success': {
            return <SuccessButton {...buttonParams} onClick={handleOnClick} onMouseEnter={handleOnMouseEnter}>{value}</SuccessButton>;
            break;
        }
        default: {
            return <StyledButton {...buttonParams} onClick={handleOnClick} onMouseOut={handleOnMouseOut}>{value}</StyledButton>
        }
    }
}

export default Button;