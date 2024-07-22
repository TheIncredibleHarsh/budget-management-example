import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import Icon from "../shared/components/Icon";
import { Logo } from "../shared/components/Logo";
import { LinkItem, ItemText, LogoLink, NavbarContainer, AboutLink } from "./Styles";
import Modal from "../shared/components/Modal";
import CreateTransactionModal from "../shared/components/Modals/CreateTransactionModal";
import { useLoading } from "../shared/hooks/useLoading";
import LoadingScreen from "../shared/components/LoadingScreen";

const Budget = ()=>{
    const {loading} = useLoading();
    const [searchParams] = useSearchParams();
    const createModelOpen = searchParams.get('createTransaction');

    return (
        <>
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
            {createModelOpen && <Modal 
                title="Create Transaction"
                modalContent={<CreateTransactionModal />}
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
        <LinkItem {...itemProps}>
            <Icon {...iconProps}/>
            <ItemText><>{text}</></ItemText>
        </LinkItem>
    )
}

export default Budget;