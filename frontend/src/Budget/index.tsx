import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import {ToastContainer} from 'react-toastify'

import Icon from "../shared/components/Icon";
import { Logo } from "../shared/components/Logo";
import { LinkItem, ItemText, LogoLink, NavbarContainer, AboutLink } from "./Styles";
import Modal from "../shared/components/Modal";
import CreateTransactionModal from "../shared/components/Modals/CreateTransactionModal";
import LoadingScreen from "../shared/components/LoadingScreen";
import CreateCardModal from "../shared/components/Modals/CreateCardModal";
import CreateAccountModal from "../shared/components/Modals/createAccountModal";

import useOpenModal from "../shared/hooks/useOpenModal";
import { useLoading } from "../shared/hooks/useLoading";

import 'react-toastify/dist/ReactToastify.css';

const Budget = ()=>{
    const {loading} = useLoading();
    const [searchParams] = useSearchParams();
    const {setModalClose} = useOpenModal();
    const createTransactionModalOpen = searchParams.get('createTransaction');
    const createCardModalOpen = searchParams.get('createCard')
    const createAccountModalOpen = searchParams.get('createAccount')

    const closeModal =(name: string) => {
        setModalClose(name)
    }

    return (
        <>
            <ToastContainer position="bottom-left"/>
            {loading && <LoadingScreen />}
            <NavbarContainer>
                <LogoLink>
                    <Logo size={80}/>
                </LogoLink>

                {generateItem("Dashboard", "dashboard", "/dashboard")}
                {generateItem("Transactions", "transactions", "/transactions")}
                {generateItem("Cards", "cards", "/cards")}
                {generateItem("Accounts", "accounts", "/accounts")}
                {generateItem("Settings", "settings", "/settings")}

                <AboutLink>
                    <Icon type={"about"} color={"white"} />
                    <ItemText><>{"About"}</></ItemText>
                </AboutLink> 
            </NavbarContainer>
            {createTransactionModalOpen && <Modal 
                title="Create Transaction"
                modalContent={<CreateTransactionModal />}
                onCloseHandler={() => {closeModal('createTransaction')}}
            />}

            {createCardModalOpen && <Modal 
                title="Create Card"
                modalContent={<CreateCardModal />}
                onCloseHandler={()=>closeModal('createCard')}
            />}

            {createAccountModalOpen && <Modal 
                title="Create Account"
                modalContent={<CreateAccountModal />}
                onCloseHandler={()=>closeModal('createAccount')}
            />}

            <Outlet />
        </>
    );
};

const generateItem = (text:string, iconType:string, toLink:string) => {
    let implemented = !!toLink;
    let itemProps = implemented ? {as: NavLink, to: toLink} : {}
    let iconProps = {
        type: iconType,
        color: 'white'
    }
    return (
        <LinkItem {...itemProps} currentRoute={location.pathname}>
            <Icon {...iconProps}/>
            <ItemText><>{text}</></ItemText>
        </LinkItem>
    )
}

export default Budget;