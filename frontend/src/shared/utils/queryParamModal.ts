import { createSearchParams, useLocation, useNavigate } from "react-router-dom"
// import { createBrowserHistory } from "history"; // Todo: not used, remove later
import queryString from "query-string";
import { omit } from "lodash";

export const openModal = (param: string) => {
    const navigate = useNavigate();
    const location = useLocation();
    navigate({
        pathname: location.pathname,
        search: createSearchParams({
            [`modal-${param}`]: 'true'
        }).toString()
    });
}

export const closeModal = (param: string) => {
    const navigate = useNavigate();
    const location = useLocation();
    const search = omit(queryString.parse(location.search), [`modal-${param}`]);
    navigate({
        pathname: location.pathname,
        search: createSearchParams(search).toString()
    });
}

export const modalIsOpen = (param:string) => !!location.search.includes(`modal=${param}`)