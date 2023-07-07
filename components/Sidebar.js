import Image from "next/future/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
const Sidebar = () => {
  const {categorias} = useQuiosco()
  return (
    <>
        <Image src={"/assets/img/logo.svg"} width={200} height={100} alt="imagen logo"/>

        <nav className=" mt-10">
          {categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
    </>
  )
}

export default Sidebar