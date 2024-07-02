import Icon from "../Icon";
import { HeaderText, StyledHeader, StyledSearchBar, StyledTextInput } from "./Styles";

const Header = () => {
    return (
        <StyledHeader>
            <HeaderText>Dashboard</HeaderText>
            <StyledSearchBar>
                <StyledTextInput placeholder="Search">

                </StyledTextInput>
                
                <Icon type="search" />
            </StyledSearchBar>
        </StyledHeader>
    )
}

export default Header;