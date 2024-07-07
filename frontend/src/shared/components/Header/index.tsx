import Icon from "../Icon";
import { HeaderText, StyledHeader, StyledSearchBar, StyledTextInput } from "./Styles";

const Header = ({title}:{title:string}) => {
    return (
        <StyledHeader>
            <HeaderText>{title}</HeaderText>
            <StyledSearchBar>
                <StyledTextInput placeholder="Search">

                </StyledTextInput>
                
                <Icon type="search" />
            </StyledSearchBar>
        </StyledHeader>
    )
}

export default Header;