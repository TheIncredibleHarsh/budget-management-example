import { MenuItem } from "@mui/material"
import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./styles"
import { ReactElement, useEffect, useState } from "react"
import useTransactionsApi from "../../../hooks/useTransactionsApi"

const CreateTransactionModal = () => {
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(new Date())
    const [transactionType, setTransactionType] = useState('Expense')
    const [vendor, setVendor] = useState()
    const [paymentMode, setPaymentMode] = useState('')
    const [comments, setComments] = useState('')
    const [transaction, setTransaction] = useState({});

    useEffect(()=>{
        const t = {
            amount: amount,
            date: date,
            transactionType: transactionType,
            vendor: vendor,
            paymentMode: paymentMode,
            comments: comments
        };
        console.log(t);
        setTransaction(t);
    },[amount, date, transactionType, vendor, paymentMode, comments])

    const {createTransaction} = useTransactionsApi()
    
    return (
        <FormContainer>
            <FieldsContainer>
                <FormField label=""                     type="file"     />
                <FormField label="Amount"               type="number"   onChange={setAmount}/>
                <FormField label="Date"                 type="date"     onChange={setDate}/>
                <FormField label="Transaction type"     type="select"   onChange={setTransactionType}   options={transactionTypeOptions()}/>
                <FormField label="Vendor Name"          type="text"     onChange={setVendor}/>
                <FormField label="Payment Mode"         type="select"   onChange={setPaymentMode}/>
                <FormField label="Comments"             type="textarea" onChange={setComments}/>
            </FieldsContainer>
            <ButtonsContainer>
                <Button type="success" value="Create" handleOnClick={() => createTransaction(transaction)}/>
                <Button value="Cancel" handleOnClick={() => console.log("here")}/>
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