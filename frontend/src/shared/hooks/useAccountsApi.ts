import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { URLSearchParams } from "url";
import { useLoading } from "./useLoading";
import { toast } from "react-toastify";

const useAccountsApi = () => {
    const {setLoading} = useLoading()
    const base_url = "http://localhost:3000";
    const createAccount = async (account: any) => {
        await axios.post(urlBuilder(base_url, '/accounts'), {account: account})
            .then(response => {
                return response
            })
            .catch(() => {
                setLoading(false)
                toast.error("Something went wrong!")
                throw new Error("Something went wrong, try after some time.")
            });

    }

    const fetchAccounts = async (urlParams?: URLSearchParams) => {
        let result = await axios.get(urlBuilder(base_url, '/accounts', urlParams?.toString()))
            .then(response => {
                return response.data
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });
        
        return result
    }

    return {
        createAccount,
        fetchAccounts
    }
}

export default useAccountsApi;