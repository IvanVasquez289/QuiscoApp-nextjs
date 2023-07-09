import Image from "next/future/image";
import useQuiosco from "../hooks/useQuiosco";
const Categoria = ({categoria}) => {
  const {handleClickCategoria, categoriaActual} = useQuiosco();
  const {nombre, icono, id} = categoria;
  return (
    <div 
        className={`${categoriaActual?.id == id ? 'bg-amber-400' : ''}  flex items-center gap-4 border hover:bg-amber-400 p-2 cursor-pointer`}
        onClick={ () => handleClickCategoria(id)}
    >
        <Image 
            src={`/assets/img/icono_${icono}.svg`} 
            width={70} 
            height={70}
            alt={`logo ${nombre}`}
        />

        <button 
            className=" text-2xl font-bold"
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria