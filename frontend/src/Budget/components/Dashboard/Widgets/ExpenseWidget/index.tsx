import WidgetTitle from "../../../../../shared/components/WidgetTitle";
import { WidgetContainerLg } from "../Styles"
import { PieChart } from "@mui/x-charts";
import { ChartContainer, ExpenseCategory, ExpenseItemContainer, ExpenseListContainer, ExpenseSum, StyledContainer } from "./Styles";

var expenseData: {[key: string]: number} = {
    category1: 40,
    category2: 30,
    category3: 15,
    category4: 10,
    category5: 40,
    category6: 30,
    category7: 15,
    category8: 10, 
}

const ExpenseWidget = () => {
    return (
        <WidgetContainerLg>
            <WidgetTitle title="Expenses" icon="null"/>
            <StyledContainer style={{height: 250}}>
                <ChartContainer>
                    <PieChart
                        series={[
                            {
                                data: [
                                    {value: 40},
                                    {value: 30},
                                    {value: 15},
                                    {value: 10},
                                ],
                                innerRadius: 40,
                                cx: 150
                            }
                        ]}
                    />
                </ChartContainer>
                <ExpenseListContainer>
                {
                    Object.keys(expenseData).map(key => renderExpenseItem(key))
                }
                </ExpenseListContainer>
            </StyledContainer>
        </WidgetContainerLg>
    )
}


// todo: Change this to use real data from BE 
const renderExpenseItem = (key: string)  => {
    return (
    <ExpenseItemContainer id={key}>
        <ExpenseCategory>{key}</ExpenseCategory>
        <ExpenseSum>{expenseData[key]}{'$'}</ExpenseSum>
    </ExpenseItemContainer>)
}

export default ExpenseWidget;