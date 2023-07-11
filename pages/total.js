import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import formatearDinero from "../helpers";
export default function Total() {
  const {pedido,nombre,setNombre,handleSubmit,total} = useQuiosco()
  
  const existenPedidos = () => {
    return pedido.length === 0 || nombre === '' || nombre.length <3
  }

  return (
    <Layout pagina={"Total y confirmar pedido"}>
      <h1 className=" text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="block font-bold mb-3 text-xl text-slate-800"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 rounded p-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value) }
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar <span className="font-bold">{formatearDinero(total)}</span>{" "}
          </p>
        </div>

        <div className="mt-10">
          <input
            type="submit"
            value="Confirmar pedido"
            className={`
            ${existenPedidos() ? 'bg-indigo-100' : 'bg-indigo-600  hover:bg-indigo-400 cursor-pointer'}
            p-2 w-full xl:w-1/3 rounded text-white uppercase font-bold 
            `}
            disabled={existenPedidos()}
          />
        </div>
      </form>
    </Layout>
  );
}
