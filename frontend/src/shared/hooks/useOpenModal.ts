import { createSearchParams, useSearchParams } from "react-router-dom";

const useOpenModal = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const setModalOpen = (modalName: string) => {
        const params = createSearchParams({[modalName]: "true"})
        setSearchParams(params)
    }

    const setModalClose = (modalName: string) => {
        const urlParams = searchParams
        urlParams.delete(modalName)
        setSearchParams(urlParams)
    }

    return { setModalOpen, setModalClose }
}

export default useOpenModal;