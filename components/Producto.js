import Image from "next/future/image";
import formatearDinero from "../helpers";
const Producto = ({producto}) => {
  const {nombre,precio,imagen} = producto;
  return (
    <div className="border p-3 shadow-md">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`imagen platillo ${nombre}`} 
            width={400} 
            height={500}
        />

        <div className="p-5">
            <h3 className=" text-2xl font-bold">{nombre}</h3>
            <p className=" text-4xl font-black text-amber-500">{formatearDinero(precio)}</p>
        </div>
    </div>
  )
}

export default Producto