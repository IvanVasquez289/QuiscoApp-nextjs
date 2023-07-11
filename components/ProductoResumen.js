import Image from "next/future/image";
import formatearDinero from "../helpers";
const ProductoResumen = ({producto}) => {
  const {nombre,imagen,precio,cantidad} = producto;
  console.log(producto)
  return (
    <div className='flex gap-10 items-center content-center mb-3 shadow p-3'>
      <div className=" w-1/6">
        <Image
          src={`/assets/img/${imagen}.jpg`} 
          width={300}
          height={400}
          alt={`imagen producto ${nombre}`}
        />
      </div>
      <div className=" w-5/6">
          <p className=" text-3xl font-bold">{nombre}</p>
          <p className=" text-xl mt-3 font-bold">Cantidad: {cantidad}</p>
          <p className=" text-xl mt-3 font-bold text-amber-500">Precio: {formatearDinero(precio)}</p>
          <p className=" text-sm mt-3  text-gray-600 font-bold ">Subtotal: {formatearDinero(precio*cantidad)}</p>
      </div>
    </div>
  )
}

export default ProductoResumen