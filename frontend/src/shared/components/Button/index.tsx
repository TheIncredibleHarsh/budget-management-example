import { SuccessButton, StyledButton } from "./Styles";

const Button = ({type, value, onClick}: {type?: string, value: string, onClick?(target: any):void}) => {
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
            return <SuccessButton>{value}</SuccessButton>;
            break;
        }
        default: {
            return <StyledButton>{value}</StyledButton>
        }
    }
}

export default Button;