import AdminLayout from "../layout/AdminLayout"
import useSWR from 'swr'
import axios from 'axios';
import OrdenCompletada from '../components/OrdenCompletada'
import { useEffect, useState } from "react";
import useQuiosco from "../hooks/useQuiosco";
import formatearDinero from "../helpers";
const ordenesCompletadas = () => {
  const [ganancias,setGanancias] = useState(0)
  const {ordenesCompletadas,obtenerOrdenesCompletadas} = useQuiosco()
  const fetcher = () => axios('/api/ordenesCompletadas').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenesCompletadas', fetcher,{refreshInterval:50})

  useEffect(() => {
    obtenerOrdenesCompletadas()
  }, [data])
  

  useEffect(() => {
    const gananciasNuevo = ordenesCompletadas.reduce((total,orden) => (orden.total) + total, 0)
    setGanancias(gananciasNuevo)
  }, [ordenesCompletadas])

  return (
    <AdminLayout
        pagina={'Ordenes completadas'}
    >
        <h1 className=" text-4xl font-black">Panel de Administracion</h1>
        <div className="md:flex justify-between my-10">
          <p className="text-2xl">Ordenes Completadas</p>
          <button className="bg-indigo-600 font-bold text-white rounded p-3 ">Ventas totales: {formatearDinero(ganancias)}</button>
        </div>
        {data && data.length ? data.map( orden => (
            <OrdenCompletada
                key={orden.id}
                orden={orden}
            />
        ) ) : 'No hay ordenes completadas aún'}
    </AdminLayout>
  )
}

export default ordenesCompletadas