import { MenuItem } from "@mui/material"
import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./styles"
import { ReactElement, useEffect, useState } from "react"
import useTransactionsApi from "../../../hooks/useTransactionsApi"
import useLookupApi from "../../../hooks/useLookupApi"
import useOpenModal from "../../../hooks/useOpenModal"
import { useLoading } from "../../../hooks/useLoading"
import { toast } from "react-toastify"

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
    const {setLoading} = useLoading()

    useEffect(()=>{
        const t = {
            transactionAmount: amount,
            transactionDate: date,
            transactionTypeId: transactionType,
            transactionVendor: vendor,
            paymentMethodId: paymentMode,
            comments: comments
        };
        setTransaction(t);
    },[amount, date, transactionType, vendor, paymentMode, comments])

    const {createTransaction} = useTransactionsApi()
    const {fetchLookupData} = useLookupApi()
    const {setModalClose} = useOpenModal()

    const handleCreateAction = ()=>{
        setLoading && setLoading(true)

        createTransaction(transaction).then(() => {
            setLoading && setLoading(false)
            closeModal()
            toast("Transaction created!")
        })
    }

    const closeModal = () => {
        setModalClose("createTransaction");
    }

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
                <Button type="success" value="Create" handleOnClick={handleCreateAction}/>
                <Button value="Cancel" handleOnClick={() => setModalClose('createTransaction')}/>
            </ButtonsContainer>
        </FormContainer>
    )
}

export default CreateTransactionModal