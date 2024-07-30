import { NavLink, Outlet } from "react-router-dom";
import { EmptyContainer, ItemText, LinkItem, NavbarContainer } from "./Styles";
import Icon from "../../../shared/components/Icon";
import { PageContainer } from "../../../shared/StyledComponents/styles";

const Settings = () => {
    return (
        <PageContainer>
            <NavbarContainer>
                <EmptyContainer/>
                {generateItem("Profile", "account", "/settings/profile")}
                {generateItem("App settings", "app-settings", "/settings/config")}
                {generateItem("Notifications", "notification", "")}
            </NavbarContainer>
            <Outlet />
        </PageContainer>
    )
}

const generateItem = (text:string, iconType:string, toLink:string) => {
    let implemented = !!toLink;
    let itemProps = implemented ? {
        as: NavLink, 
        to: toLink,
        cursor: implemented ? 'pointer' : 'no-drop'
    } : {}
    let iconProps = {
        type: iconType,
        color: '#6e7781',
    }
    return (
        <LinkItem {...itemProps}>
            <Icon {...iconProps}/>
            <ItemText><>{text}</></ItemText>
        </LinkItem>
    )
}

export default Settings;