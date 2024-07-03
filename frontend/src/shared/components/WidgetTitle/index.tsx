import { color } from "../../data";
import { TitleBox, StyledSpan } from "./Styles";
import Icon from "../Icon";

const WidgetTitle = ({title, icon}:{title: string, icon: string}) => {
    return(
        <TitleBox>
            <StyledSpan>{title}</StyledSpan>
            <Icon type={icon} color={`${color.accentSecondary}`}/>
        </TitleBox>
    )
}

export default WidgetTitle;