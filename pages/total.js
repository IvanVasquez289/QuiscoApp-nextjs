import Layout from "../layout/Layout";
export default function Total() {
  return (
    <Layout pagina={"Total y confirmar pedido"}>
      <h1 className=" text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

      <form>
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
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar <span className="font-bold">$200</span>{" "}
          </p>
        </div>

        <div className="mt-10">
          <input
            type="submit"
            value="Confirmar pedido"
            className="bg-indigo-600 p-2 w-full xl:w-1/3 rounded text-white uppercase font-bold cursor-pointer"
          />
        </div>
      </form>
    </Layout>
  );
}
