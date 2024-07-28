import Header from "../../../shared/components/Header";
import { WidgetsContainer } from "./Styles";
import AccountsWidget from "./Widgets/AccountsWidget";
import CardsWidget from "./Widgets/CardsWidget";
import ExpenseWidget from "./Widgets/ExpenseWidget";
import ReportWidget from "./Widgets/ReportWidget";
import { WidgetContainerSm } from "./Widgets/Styles";
import TransactionsWidget from "./Widgets/TransactionsWidget";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import { useEffect } from "react";

const Dashboard = () => {
    return (
        <PageContainer>
            <StyledContainer>
                <Header title={useCurrentLocation()}/>
            </StyledContainer>
            <WidgetsContainer>
                <TransactionsWidget />
                {/* <ReportWidget /> */}
                <CardsWidget />
                <AccountsWidget />
                <ExpenseWidget />
            </WidgetsContainer>
        </PageContainer>
    )
}

export default Dashboard;