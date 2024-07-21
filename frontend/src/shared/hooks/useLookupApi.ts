import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { LookupData } from "../types";

const useLookupApi = () => {
    const base_url = "http://localhost:3000";
    const fetchLookupData = async (lookupName: string) => {
        let lookupData = new Array<LookupData>

        try{
            // Serialize data from backend, should solve this
            lookupData = await axios.get(urlBuilder(base_url, `/lookup/${lookupName}`))
                .then(response => response.data)
                .then(data => data);
        } catch (err:any) {
            console.log(err.message)
        }
        return lookupData;
    }

    return {fetchLookupData}
}

export default useLookupApi;