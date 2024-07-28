import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { URLSearchParams } from "url";
import { useLoading } from "./useLoading";
import { toast } from "react-toastify";

const useCardsApi = () => {
    const {setLoading} = useLoading()
    const base_url = "http://localhost:3000";
    const createCard = async (card: any) => {
        await axios.post(urlBuilder(base_url, '/cards'), {card: card})
            .then(response => {
                return response
            })
            .catch(() => {
                setLoading(false)
                toast.error("Something went wrong!")
                throw new Error("Something went wrong, try after some time.")
            });

    }

    const fetchCards = async (urlParams?: URLSearchParams) => {
        let result = await axios.get(urlBuilder(base_url, '/cards', urlParams?.toString()))
            .then(response => {
                return response.data
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });
        
        return result
    }

    return {
        createCard,
        fetchCards
    }
}

export default useCardsApi;