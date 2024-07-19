import { createPortal } from "react-dom";
import { 
    ModalBackdrop, 
    ModalBodyContainer, 
    ModalContainer, 
    ModalHeader, 
    ModalTitle 
} from "./Styles";
import { ReactElement } from "react";

const Modal = ({title, modalContent}:{title:string, modalContent: ReactElement}) => {
    return createPortal(
        <ModalBackdrop>
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
