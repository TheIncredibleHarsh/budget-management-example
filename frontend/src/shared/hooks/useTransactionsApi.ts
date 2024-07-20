import axios from "axios";
import urlBuilder from "../utils/urlBuilder";

const useTransactionsApi = () => {
    const base_url = "http://localhost:3000";
    const createTransaction = (transaction: any) => {
        axios.post(urlBuilder(base_url, '/transactions'), transaction)
            .then(response => console.log(response));
    }

    return {createTransaction}
}

export default useTransactionsApi;