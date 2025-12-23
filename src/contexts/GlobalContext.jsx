import { Children, createContext, useState, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ Children }) {
    const [loading, setLoading] = useState(false)

    const values = {
        loading,
        setLoading
    }

    return (
        <GlobalContext.Provider value={values}>
            {Children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }