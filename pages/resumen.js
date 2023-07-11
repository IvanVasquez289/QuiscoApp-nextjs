import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import ProductoResumen from "../components/ProductoResumen"
export default function Resumen() {
    const {pedido} = useQuiosco()
    console.log(pedido)
    return(
        <Layout
            pagina={'Resumen'}
        >
            <h1 className=" text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>

            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No has agregado productos a tu pedido</p>
            ) : (
                pedido.map(producto => (
                    <ProductoResumen key={producto.id} producto={producto}/>
                ))
            )}
        </Layout>
    )
}