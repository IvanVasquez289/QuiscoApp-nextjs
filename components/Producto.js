import Image from "next/future/image";
import formatearDinero from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
const Producto = ({producto}) => {
  const {nombre,precio,imagen} = producto;
  const {handleSetProducto, handleChangeModal} = useQuiosco()
  return (
    <div className="border p-3 shadow-md">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`imagen platillo ${nombre}`} 
            width={700} 
            height={500}
        />

        <div className="p-5">
            <h3 className=" text-2xl font-bold">{nombre}</h3>
            <p className=" text-4xl font-black text-amber-500">{formatearDinero(precio)}</p>
        </div>

        <button
          type="button"
          className=" bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white font-bold uppercase"
          onClick={()=> {
            handleSetProducto(producto)
            handleChangeModal()
          }}
        >
          Agregar
        </button>
    </div>
  )
}

export default Producto