import AdminLayout from "../layout/AdminLayout"
import useSWR from 'swr'
import axios from 'axios';
import OrdenCompletada from '../components/OrdenCompletada'
const ordenesCompletadas = () => {
  const fetcher = () => axios('/api/ordenesCompletadas').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenesCompletadas', fetcher,{refreshInterval:50})
  console.log(data)
  return (
    <AdminLayout
        pagina={'Ordenes completadas'}
    >
        <h1 className=" text-4xl font-black">Panel de Administracion</h1>
        <p className="text-2xl my-10">Ordenes Completadas</p>
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