import axios from "axios";
import { useState, useEffect, createContext } from "react";
import {toast} from 'react-toastify'
import { useRouter } from "next/router";
const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

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

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.cantidad*producto.precio) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])
    

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
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
            toast.info('Editado correctamente')
        }else{
            console.log('nuevo producto')
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }

    const handleEditarCantidad = (id) => {
        const productoActualizado = pedido.find(producto => producto.id === id)
        setProducto(productoActualizado)
        setModal(!modal)
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/ordenes',{pedido,nombre,total,fecha:Date.now().toString()})
            // Resetear App
            toast(`${nombre} tu pedido ha sido enviado 🥳`,{
                className: 'foo-bar'
            })
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (error) {
            console.log(error)
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
                pedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                handleSubmit,
                total
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