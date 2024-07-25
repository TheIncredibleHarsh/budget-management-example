import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { URLSearchParams } from "url";

const useTransactionsApi = () => {
    const base_url = "http://localhost:3000";
    const createTransaction = async (transaction: any) => {
        await axios.post(urlBuilder(base_url, '/transactions'), {transaction: transaction})
            .then(response => {
                return response
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });

    }

    const fetchTransactions = async (urlParams?: URLSearchParams) => {
        let result = await axios.get(urlBuilder(base_url, '/transactions', urlParams?.toString()))
            .then(response => {
                return response.data
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });
        
        return result
    }

    return {
        createTransaction,
        fetchTransactions
    }
}

export default useTransactionsApi;