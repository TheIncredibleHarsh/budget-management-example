import { MenuItem } from "@mui/material"
import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./styles"
import { ReactElement, useEffect, useMemo, useState } from "react"
import useTransactionsApi from "../../../hooks/useTransactionsApi"
import useLookupApi from "../../../hooks/useLookupApi"

const CreateTransactionModal = () => {
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(new Date())
    const [transactionType, setTransactionType] = useState('Expense')
    const [vendor, setVendor] = useState()
    const [paymentMode, setPaymentMode] = useState('')
    const [comments, setComments] = useState('')
    const [transaction, setTransaction] = useState({})
    const [transactionTypeOptions, setTransactionTypeOptions] = useState<ReactElement[]>([])
    const [paymentMethodOptions, setPaymentMethodOptions] = useState<ReactElement[]>([])

    useEffect(()=>{
        const t = {
            transactionAmount: amount,
            transactionDate: date,
            transactionType: transactionType,
            transactionVendor: vendor,
            paymentMethod: paymentMode,
            comments: comments
        };
        setTransaction(t);
    },[amount, date, transactionType, vendor, paymentMode, comments])

    const {createTransaction} = useTransactionsApi()
    const {fetchLookupData} = useLookupApi()

    useEffect(() => {
        fetchLookupData("transactionType")
            .then(result => {
                if(result.length >= 0){
                    let options = new Array<ReactElement>;
                    result.map(option => {
                        options.push(<MenuItem value={option.id}>{option.name}</MenuItem>)
                    })
                    
                    setTransactionTypeOptions(options)
                }
            }) // useMemo?
            
    }, [])

    useEffect(() => {
        fetchLookupData("paymentMethod")
            .then(result => {
                if(result.length >= 0){
                    let options = new Array<ReactElement>;
                    result.map(option => {
                        options.push(<MenuItem value={option.id}>{option.name}</MenuItem>)
                    })
                    
                    setPaymentMethodOptions(options)
                }
            }) // useMemo?
            
    }, [])
    
    return (
        <FormContainer>
            <FieldsContainer>
                <FormField label=""                     type="file"     />
                <FormField label="Amount"               type="number"   onChange={setAmount}/>
                <FormField label="Date"                 type="date"     onChange={setDate}/>
                <FormField label="Transaction type"     type="select"   onChange={setTransactionType}   options={transactionTypeOptions}/>
                <FormField label="Vendor Name"          type="text"     onChange={setVendor}/>
                <FormField label="Payment Mode"         type="select"   onChange={setPaymentMode}       options={paymentMethodOptions}/>
                <FormField label="Comments"             type="textarea" onChange={setComments}/>
            </FieldsContainer>
            <ButtonsContainer>
                <Button type="success" value="Create" handleOnClick={() => createTransaction(transaction)}/>
                <Button value="Cancel" handleOnClick={() => console.log("here")}/>
            </ButtonsContainer>
        </FormContainer>
    )
}

export default CreateTransactionModal