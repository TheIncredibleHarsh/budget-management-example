import React, { createContext, ReactElement, useContext, useState } from "react";

const LoadingContext = createContext({
    loading: false,
    setLoading: (value:boolean)=>{}, 
})   

export const LoadingProvider = ({children}:{children:ReactElement}) => {
    const [loading, setLoading] = useState(false); 
    const value = {loading, setLoading}
    return (
        <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
    )
}

export const useLoading = () => {
     const context = useContext(LoadingContext)
     if (!context){
        throw new Error("useLading must be used be used within LoadingProvider")
     }
     return context
}