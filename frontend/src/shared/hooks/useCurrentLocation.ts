import { useLocation } from "react-router-dom"

const useCurrentLocation = () => {
    const location = useLocation().pathname.substring(1)

    return location[0].toUpperCase() + location.slice(1)
}

export default useCurrentLocation;