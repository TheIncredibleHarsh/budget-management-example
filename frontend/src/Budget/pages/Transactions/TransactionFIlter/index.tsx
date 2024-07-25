import { ReactElement, useEffect, useState } from "react"
import { FilterButtonGroup, FilterGroup, FilterListContainer } from "./Styles"
import Button from "../../../../shared/components/Button"
import FilterField from "../../../../shared/components/FilterField"
import { TransactionFilter as TransactionFilterType } from "../../../../shared/types"
import useLookupApi from "../../../../shared/hooks/useLookupApi"
import { MenuItem } from "@mui/material"

const TransactionFilter = ({onCloseHandler, onSaveHandler}:{onCloseHandler: () => void, onSaveHandler:(value: any) => void}) => {


    const [transactionTypeOptions, setTransactionTypeOptions] = useState<ReactElement[]>([])
    const [paymentMethodOptions, setPaymentMethodOptions] = useState<ReactElement[]>([])

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

    const [filter, setFilter] = useState<TransactionFilterType>()
    const [income, setIncome] = useState(true)
    const [expense, setExpense] = useState(true)
    const [vendor, setVendor] = useState("")
    const [transactionType, setTransactionType] = useState()
    const [paymentMode, setPaymentMode] = useState()

    const closeFilter = () => {
        onCloseHandler()
    }

    const saveFilter = () => {
        onSaveHandler(filter)
        closeFilter()
    }

    const applyFilterButtonParams = {
        value: "Apply",
        size: 60,
        type: 'success'
    }

    const cancelFilterButtonParams = {
        value: "Cancel",
        size: 60
    }

    useEffect(() => {
        const temp:TransactionFilterType = {
            income,
            expense,
            vendor,
            transactionType,
            paymentMode
        }
        setFilter(temp)
    }, [income, expense, vendor, transactionType, paymentMode])

    return (
        <FilterListContainer>
            <FilterGroup>
                <FilterField label={"Income"}           type={"checkbox"}   onChange={setIncome}/>
                <FilterField label={"Expense"}          type={"checkbox"}   onChange={setExpense}/>
                <FilterField label={"Vendor"}           type={"text"}       onChange={setVendor}/>
                <FilterField label={"Transaction type"} type={"select"}     onChange={setTransactionType}     options={transactionTypeOptions}/>
                <FilterField label={"Payment mode"}     type={"select"}     onChange={setPaymentMode}         options={paymentMethodOptions}/>
            </FilterGroup>
            <FilterButtonGroup>
                <Button {...applyFilterButtonParams} handleOnClick={saveFilter}/>
                <Button {...cancelFilterButtonParams} handleOnClick={closeFilter}/>
            </FilterButtonGroup>
        </FilterListContainer>
    )
}

export default TransactionFilter