import { useRouter } from "next/router"
const pasos = [
    {paso:1, nombre: 'Menú', url: '/'},
    {paso:2, nombre: 'Resumen', url: '/resumen'},
    {paso:3, nombre: 'Datos y Total', url: '/total'},
]
const Pasos = () => {
  const router = useRouter()

  const calcularProgreso = () => {
    let valor;
    switch (router.pathname) {
        case '/':
            valor = '5%'
            break;
        case '/resumen':
            valor = '50%'
            break;
        case '/total':
            valor = '100%'
            break;
    
        default:
            break;
    }
    return valor
  }
  
  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso => (
                <button 
                    key={paso.paso}
                    className="font-bold text-2xl"
                    onClick={()=>{
                        router.push(paso.url)
                    }}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className=" bg-gray-100 mb-6">
            <div 
                className="rounded-full bg-amber-500 h-2 leading-none text-center "
                style={
                    {width: calcularProgreso() }
                }
            >
            </div>
        </div>
    </>
  )
}

export default Pasos