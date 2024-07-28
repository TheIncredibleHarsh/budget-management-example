import Button from "../../Button"
import FormField from "../../FormField"
import { ButtonsContainer, FieldsContainer, FormContainer } from "./Styles"
import { useEffect, useState } from "react"
import useOpenModal from "../../../hooks/useOpenModal"
import { useLoading } from "../../../hooks/useLoading"
import { toast } from "react-toastify"
import useCardsApi from "../../../hooks/useCardsApi"
import { useNavigate } from "react-router-dom"

const CreateCardModal = () => {
    const [cardName,        setCardName         ] = useState()
    const [cardNumber,      setCardNumber       ] = useState("")
    const [cardHolderName,  setCardHolderName   ] = useState("")
    const [expirationMonth, setExpirationMonth  ] = useState(1)
    const [expirationYear,  setExpirationYear   ] = useState(2000)
    const [cvv,             setCvv              ] = useState()
    const [card,            setCard             ] = useState({})
    const [currentBalance,  setCurrentBalance   ] = useState(0)
    const [limit,           setLimit            ] = useState(0)
    const [expiration,      setExpiration       ] = useState("")
    const {setLoading} = useLoading()

    useEffect(()=>{
        const t = {
            cardName,
            cardNumber,
            cardHolderName,
            expirationMonth,
            expirationYear,
            cvv,
            currentBalance,
            limit
        };
        setCard(t);
    },[ cardName,
        cardNumber,
        cardHolderName,
        expirationMonth,
        expirationYear,
        cvv,
        currentBalance,
        limit
    ])

    const {createCard} = useCardsApi()
    const {setModalClose} = useOpenModal()
    const navigate = useNavigate();

    const handleCreateAction = ()=>{
        setLoading && setLoading(true)

        createCard(card).then((success) => {
            setLoading && setLoading(false)
            closeModal()
            toast("Card created!")
        })
        navigate("/cards")
    }

    const closeModal = () => {
        setModalClose("createCard");
    }

    const updateExpiration = (value: string) => {
        const newValue = value
                        .replace(/[^0-9]/gi, '')
                        .replace(/(.{2})/, '$1 /').trim();
        setExpirationMonth(parseInt(value.split('/')[0]))
        setExpirationYear(parseInt(`20${value.split('/')[1]}`))
        setExpiration(newValue)
    }

    const onCCChangeHandler = (value: string) => {
        const newValue = value
                        .replace(/[^0-9]/gi, '')
                        .replace(/(.{4})/g, '$1 ').trim();
        console.log(value)
        setCardNumber(newValue)
    }
    
    return (
        <FormContainer>
            <FieldsContainer>
                <FormField label="Card Name"            type="text"     onChange={setCardName}/>
                <FormField label="Card Number"          type="text"     onChange={onCCChangeHandler} value={cardNumber} maxLength={19}/>
                <FormField label="Card Holder Number"   type="text"     onChange={setCardHolderName}/>
                <FormField label="Expiration"           type="text"     onChange={updateExpiration} placeHolder={"MM/YY"} value={expiration} maxLength={6}/>
                <FormField label="cvv"                  type="number"   onChange={setCvv} maxLength={3}/>
                <FormField label="Current Balance"      type="number"   onChange={setCurrentBalance} />
                <FormField label="limit"                type="number"   onChange={setLimit} />
            </FieldsContainer>
            <ButtonsContainer>
                <Button type="success" value="Create" handleOnClick={handleCreateAction}/>
                <Button value="Cancel" handleOnClick={() => setModalClose('createCard')}/>
            </ButtonsContainer>
        </FormContainer>
    )
}

export default CreateCardModal