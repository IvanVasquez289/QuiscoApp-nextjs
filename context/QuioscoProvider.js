import axios from "axios";
import { useState, useEffect, createContext } from "react";
import {toast} from 'react-toastify'
const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categoria')
        setCategorias(data)

    }
    
    useEffect(() => {
      obtenerCategorias()
    }, [])

    useEffect(() => {
      setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }
    
    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }
    const handleSetPedido = ({categoriaId, ...producto}) => {
        const existePedido = pedido.some(productoState => productoState.id == producto.id)
        if(existePedido){
            console.log('Producto ya existente')
            const pedidoActualizado = pedido.map(productoState => productoState.id == producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast('Editado correctamente',{
                className: 'foo-bar'
            })
        }else{
            console.log('nuevo producto')
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleSetPedido,
                pedido
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