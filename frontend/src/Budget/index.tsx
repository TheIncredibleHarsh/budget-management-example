import { NavLink, Outlet } from "react-router-dom";
import Icon from "../shared/components/Icon";
import { Logo } from "../shared/components/Logo";
import { LinkItem, ItemText, LogoLink, NavbarContainer, AboutLink } from "./Styles";

const Budget = ()=>{
    return (
        <>
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