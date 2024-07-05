import Header from "../../../shared/components/Header";
import { PageContainer, StyledContainer, WidgetsContainer } from "./Styles";
import AccountsWidget from "./Widgets/AccountsWidget";
import CardsWidget from "./Widgets/CardsWidget/Index";
import ExpenseWidget from "./Widgets/ExpenseWidget";
import ReportWidget from "./Widgets/ReportWidget";
import { WidgetContainerSm } from "./Widgets/Styles";
import TransactionsWidget from "./Widgets/TransactionsWidget";

const Dashboard = () => {
    return (
        <PageContainer>
            <StyledContainer>
                <Header />
            </StyledContainer>
            <WidgetsContainer>
                <TransactionsWidget />
                <ReportWidget />
                <CardsWidget />
                <AccountsWidget />
                <ExpenseWidget />
                <WidgetContainerSm />
            </WidgetsContainer>
        </PageContainer>
    )
}

export default Dashboard;