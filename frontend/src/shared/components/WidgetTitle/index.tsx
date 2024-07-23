import { color } from "../../data";
import { TitleBox, StyledSpan } from "./Styles";
import Icon from "../Icon";

const WidgetTitle = ({title, icon, handleCreateAction}:{title: string, icon: string, handleCreateAction: any}) => {
    return(
        <TitleBox>
            <StyledSpan>{title}</StyledSpan>
            <Icon type={icon} color={`${color.accentSecondary}`} handleOnClick={handleCreateAction}/>
        </TitleBox>
    )
}

export default WidgetTitle;