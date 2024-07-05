import { useRef } from "react";
import Icon from "../../../../../shared/components/Icon";
import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import { color } from "../../../../../shared/data";
import { WidgetContainerSm } from "../Styles"
import { AccountBalance, AccountBalanceInfo, AccountInfo, AccountInfoTexts, AccountLogo, AccountProviderName, AccountType, AccountTypeInfo, CarousalButtonLeft, CarousalButtonRight, CarousalContainer, StyledContainer, AccountBalanceInsight } from "./Styles";

const AccountsWidget = () => {

    // Todo: Extract carousal code and make a reusable component

    const carousal = useRef(null);

    const changeSlide = (left: number) => {
        const carousalElement = carousal.current;
        if(carousalElement == null) {
            return;
        } else {
            carousalElement.scrollBy({left: left, top: 0, behavior: 'smooth'})
        }
    }   

    return (
        <WidgetContainerSm>
            <WidgetTitle title="Accounts" icon="plus" />
            <CarousalContainer>
            <CarousalButtonLeft onClick={e => changeSlide(-200)}>{"<"}</CarousalButtonLeft>
            <StyledContainer ref={carousal}>
                <AccountInfo>
                    <AccountTypeInfo>
                        <AccountLogo>
                            <Icon type="dollar" size={74} color={color.accentSecondary} />
                        </AccountLogo>
                        <AccountInfoTexts>
                            <AccountProviderName>{"HDFC"}</AccountProviderName>
                            <AccountType>{"Bank Account"}</AccountType>
                        </AccountInfoTexts>
                    </AccountTypeInfo>
                    <AccountBalanceInfo>
                        <AccountBalance>{"43987"}</AccountBalance>
                        <AccountBalanceInsight>{"5% less than last month"}</AccountBalanceInsight>
                    </AccountBalanceInfo>
                </AccountInfo>
                <AccountInfo>
                    <AccountTypeInfo>
                        <AccountLogo>
                            <Icon type="dollar" size={74} color={color.accentSecondary} />
                        </AccountLogo>
                        <AccountInfoTexts>
                            <AccountProviderName>{"Punjab National Bank"}</AccountProviderName>
                            <AccountType>{"Fixed Deposit"}</AccountType>
                        </AccountInfoTexts>
                    </AccountTypeInfo>
                    <AccountBalanceInfo>
                        <AccountBalance>{"100543"}</AccountBalance>
                        <AccountBalanceInsight>{"15% more than last month"}</AccountBalanceInsight>
                    </AccountBalanceInfo>
                </AccountInfo>
            </StyledContainer>
            <CarousalButtonRight onClick={e => changeSlide(200)}>{">"}</CarousalButtonRight>
            </CarousalContainer>
        </WidgetContainerSm>
    )
}

export default AccountsWidget;