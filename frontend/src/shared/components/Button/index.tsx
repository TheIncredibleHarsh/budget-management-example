import { SuccessButton, StyledButton } from "./Styles";

const Button = ({type, value, handleOnClick}: {type?: string, value: string, handleOnClick?:(transaction: any) => void}) => {
    const buttonParams = {
        type: type
    }
    // return (
    //     <SuccessButton type="success">
    //         Create
    //     </SuccessButton>
    // )

    switch(type){
        case 'success': {
            return <SuccessButton onClick={handleOnClick}>{value}</SuccessButton>;
            break;
        }
        default: {
            return <StyledButton onClick={handleOnClick}>{value}</StyledButton>
        }
    }
}

export default Button;