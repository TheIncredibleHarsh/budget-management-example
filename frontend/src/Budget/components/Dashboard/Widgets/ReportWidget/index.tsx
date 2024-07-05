import Icon from "../../../../../shared/components/Icon";
import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import { color } from "../../../../../shared/data";
import { WidgetContainerSm } from "../Styles";
import { ReportData, ReportDataRow, ReportIconContainer, ReportTexts, ReportType, ReportValue, StyledCanvas } from "./Styles";
import { LineChart } from "@mui/x-charts";
import { TransactionType, transactions } from "../../dashboardData";

const ReportWidget = () => {

    let balance = 1000;
    let data: number[] = [100, 300, 400, 450, 500]
    // transactions.map((transaction, index) => {
    //     data[index] = balance - (transaction.transactionType === TransactionType.Expense ? transaction.transactionAmount :  (transaction.transactionAmount*-1))
    //     balance = data[index]
    // });
    
    console.log(data)

    let widgetTitleProps = {
        icon: "plus",
        title: "Reports"
    }

    return (
        <WidgetContainerSm>
            <WidgetTitle {...widgetTitleProps}/>
            <ReportDataRow>
                <ReportData>
                    <ReportIconContainer>
                        <Icon type="up-arrow" color="green" />
                    </ReportIconContainer>
                    <ReportTexts>
                        <ReportValue>98734</ReportValue>
                        <ReportType>Worth</ReportType>
                    </ReportTexts>
                </ReportData>
                <ReportData>
                    <ReportIconContainer>
                        <Icon type="down-arrow" color="red" />
                    </ReportIconContainer>
                    <ReportTexts>
                        <ReportValue>1234</ReportValue>
                        <ReportType>Spends</ReportType>
                    </ReportTexts>
                </ReportData>
            </ReportDataRow>
            <StyledCanvas>
                <LineChart
                    series={[
                      {
                        data: data || [],
                        area: true,
                        color: `${color.accentSecondary}`
                      },
                    ]}
                    grid={{ vertical: false, horizontal: false }}
                    leftAxis={null}
                    bottomAxis={null}
                />
            </StyledCanvas>
        </WidgetContainerSm>
    )
}

export default ReportWidget;