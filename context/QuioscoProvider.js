import axios from "axios";
import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categoria')
        setCategorias(data)

    }
    
    useEffect(() => {
      obtenerCategorias()
    }, [])
    
    return(
        <QuioscoContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext