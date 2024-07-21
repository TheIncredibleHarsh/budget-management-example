import axios from "axios";
import urlBuilder from "../utils/urlBuilder";

const useTransactionsApi = () => {
    const base_url = "http://localhost:3000";
    const createTransaction = (transaction: any) => {
        try{
            axios.post(urlBuilder(base_url, '/transactions'), {transaction: transaction})
                .then(response => console.log(response));
        } catch (err:any) {
            console.log(err.message)
        }

    }

    return {createTransaction}
}

export default useTransactionsApi;