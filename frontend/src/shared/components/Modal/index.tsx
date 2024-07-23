import { createPortal } from "react-dom";
import { 
    ModalBackdrop, 
    ModalBodyContainer, 
    ModalContainer, 
    ModalHeader, 
    ModalTitle 
} from "./Styles";
import { ReactElement } from "react";

const Modal = ({title, modalContent, onCloseHandler}:{title:string, modalContent: ReactElement, onCloseHandler?: () => void}) => {
    const handleOnClose = (e:any) =>{
        if(e.target.id == 'ModalBackdrop'){
            onCloseHandler && onCloseHandler()
        }
    }
    
    return createPortal(
        <ModalBackdrop onClick={handleOnClose} id="ModalBackdrop">
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBodyContainer>
                    {modalContent}
                </ModalBodyContainer>
            </ModalContainer>
        </ModalBackdrop>,
        document.body
    );
}

export default Modal;
