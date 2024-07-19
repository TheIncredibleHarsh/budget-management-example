import { MenuItem } from "@mui/material"
import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./styles"
import { ReactElement } from "react"

const CreateTransactionModal = () => {
    console.log(transactionTypeOptions())

    return (
        <FormContainer>
            <FieldsContainer>
                <FormField label=""                     type="file"     />
                <FormField label="Amount"               type="number"   />
                <FormField label="Date"                 type="date"     />
                <FormField label="Transaction type"     type="select"   options={transactionTypeOptions()}/>
                <FormField label="Vendor Name"          type="text"     />
                <FormField label="Payment Mode"         type="select"   />
                <FormField label="Comments"             type="textarea" />
            </FieldsContainer>
            <ButtonsContainer>
                <Button type="success" value="Create" />
                <Button value="Cancel" />
            </ButtonsContainer>
        </FormContainer>
    )
}

const transactionTypeOptions = ():ReactElement[] => {
    let options: ReactElement[] = [];
    ['Income', 'Expense'].map(option => {
        options.push(<MenuItem value={option}>{option}</MenuItem>)
    })
    return options;
}

export default CreateTransactionModal