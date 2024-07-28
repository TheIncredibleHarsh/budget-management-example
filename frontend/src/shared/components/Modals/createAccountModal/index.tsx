import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./Styles"
import { useEffect, useState } from "react"
import useOpenModal from "../../../hooks/useOpenModal"
import { useLoading } from "../../../hooks/useLoading"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useAccountsApi from "../../../hooks/useAccountsApi"

const CreateAccountModal = () => {
    const [account,setAccount] = useState({})
    const [accountHolder, setAccountHolder] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [bankName, setBankName] = useState("")
    const [branchCode, setBranchCode] = useState("")
    const [swiftCode, setSwiftCode] = useState("")

    const {setLoading} = useLoading()
    const {createAccount} = useAccountsApi()
    const {setModalClose} = useOpenModal()

    useEffect(()=>{
        const tempAccount = {
            accountHolder,
            accountNumber,
            bankName,
            branchCode,
            swiftCode
        }
        setAccount(tempAccount);
    },[ 
        accountHolder,
        accountNumber,
        bankName,
        branchCode,
        swiftCode
    ])


    const navigate = useNavigate();

    const handleCreateAction = ()=>{
        setLoading && setLoading(true)

        createAccount(account).then((success) => {
            setLoading && setLoading(false)
            closeModal()
            toast("Account created!")
        })
        navigate("/accounts")
    }

    const closeModal = () => {
        setModalClose("createAccount");
    }
    
    return (
        <FormContainer>
            <FieldsContainer>
                <FormField label="Account Holder" type="text" onChange={setAccountHolder}/>
                <FormField label="Account Number" type="text" onChange={setAccountNumber}/>
                <FormField label="Bank Name" type="text" onChange={setBankName}/>
                <FormField label="Branch Code" type="text" onChange={setBranchCode}/>
                <FormField label="Swift Code" type="text" onChange={setSwiftCode}/>
            </FieldsContainer>
            <ButtonsContainer>
                <Button type="success" value="Create" handleOnClick={handleCreateAction}/>
                <Button value="Cancel" handleOnClick={() => setModalClose('createCard')}/>
            </ButtonsContainer>
        </FormContainer>
    )
}

export default CreateAccountModal