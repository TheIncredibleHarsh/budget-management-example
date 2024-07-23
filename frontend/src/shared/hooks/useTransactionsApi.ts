import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { useLoading } from "./useLoading";

const useTransactionsApi = () => {
    const {setLoading} = useLoading();
    const base_url = "http://localhost:3000";
    const createTransaction = (transaction: any) => {
        setLoading && setLoading(true)
        try{
            axios.post(urlBuilder(base_url, '/transactions'), {transaction: transaction})
                .then(_ => {
                    // console.log(response)
                    setLoading && setLoading(false)
                })
                .catch(() => {
                    setLoading && setLoading(false)
                });
        } catch (err:any) {
            debugger
            setLoading && setLoading(false)
        }
    }

    return {createTransaction}
}

export default useTransactionsApi;