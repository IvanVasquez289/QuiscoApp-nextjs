import useQuiosco from "../hooks/useQuiosco";
import Image from "next/future/image";
import formatearDinero from "../helpers";
import { useEffect, useState } from "react";
const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);
  const { producto, handleChangeModal, handleSetPedido, pedido} = useQuiosco();
  const { imagen, nombre, precio } = producto;

  useEffect(() => {
    if(pedido.some(productoState => productoState.id == producto.id)){
      const productoActual = pedido.find(productoState => productoState.id == producto.id)
      setCantidad(productoActual.cantidad)
      setEdicion(true)
    }
  }, [producto,pedido])
  

  return (
    <div className=" md:flex gap-10">
      <div className=" md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${imagen}.jpg`}
          alt={`imagen producto ${nombre}`}
        />
      </div>
      <div className=" md:w-2/3">
        <div className="mt-3 md:mt-0 flex justify-end">
          <button type="button" onClick={() => handleChangeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className=" text-3xl font-bold mt-5">{nombre}</h1>
        <p className=" text-3xl text-amber-500 font-black mt-5">
          {formatearDinero(precio)}
        </p>
        <div className="flex gap-3 mt-3">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p>{cantidad}</p>
          <button
            type="button"
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div>
          <button
            type="button"
            className=" bg-indigo-600 mt-5 p-3 uppercase text-white font-bold rounded-md"
            onClick={() =>{
              handleSetPedido({ ...producto, cantidad })
              handleChangeModal()
            } }
          >
            {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
