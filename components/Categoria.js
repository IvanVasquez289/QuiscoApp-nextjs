import Image from "next/future/image";
const Categoria = ({categoria}) => {
  const {nombre, icono, id} = categoria;
  return (
    <div className=" flex items-center gap-4 border hover:bg-amber-400 p-2">
        <Image 
            src={`/assets/img/icono_${icono}.svg`} 
            width={70} 
            height={70}
            alt={`logo ${nombre}`}
        />

        <button className=" text-2xl font-bold cursor-pointer">
            {nombre}
        </button>
    </div>
  )
}

export default Categoria