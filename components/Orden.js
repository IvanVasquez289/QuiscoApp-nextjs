import Image from "next/future/image";
import formatearDinero from "../helpers";
import axios from "axios";
import {toast} from 'react-toastify'
const Orden = ({ orden }) => {
  const { nombre, total, pedido, id } = orden;

  const completarPedido = async () => {
    try {
      const data = await axios.put(`/api/ordenes/${id}`)
      toast.success('Orden completada')
      console.log(data)
    } catch (error) {
      toast.error('Hubo un error')
      console.log(error)
    }
  }
  return (
    <div className="border p-10 space-y-5">
      <h3 className=" text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="md:flex items-center py-3 border-b last-of-type:border-b-0"
          >
            <div className="md:w-32">
              <Image
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`imgaen platillo ${platillo.nombre}`}
                width={300}
                height={400}
              />
            </div>
            <div className="p-5 space-y-2">
              <p className=" text-amber-500 text-xl font-bold">{platillo.nombre}</p>
              <p className="text-lg font-bold">Cantidad:{platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex items-center justify-between my-10">
            <p className=" text-3xl font-black text-amber-500">Total a pagar: {formatearDinero(total)}</p>
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-800 p-2 uppercase rounded-md text-white font-bold mt-5 md:mt-0"
              onClick={completarPedido}
            >
              Completar orden
            </button>
      </div>
    </div>
  );
};

export default Orden;
