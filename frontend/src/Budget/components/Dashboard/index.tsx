import Header from "../../../shared/components/Header";
import { PageContainer, StyledContainer, WidgetsContainer } from "./Styles";
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
                <WidgetContainerSm />
                <WidgetContainerSm />
                <WidgetContainerSm />
                <WidgetContainerSm />
            </WidgetsContainer>
        </PageContainer>
    )
}

export default Dashboard;