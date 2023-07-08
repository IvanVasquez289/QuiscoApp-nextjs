import useQuiosco from "../hooks/useQuiosco";
import Image from "next/future/image";
import formatearDinero from "../helpers";
const ModalProducto = () => {
  const { producto, handleChangeModal } = useQuiosco();
  const { imagen, nombre, precio } = producto;
  return (
    <div className=" flex gap-10">
      <div className=" md:w-1/3">
        <Image width={400} height={100} src={`/assets/img/${imagen}.jpg`} />
      </div>
      <div className=" md:w-2/3">
        <div className="flex justify-end">
          <button onClick={() => handleChangeModal()}>
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
      </div>
    </div>
  );
};

export default ModalProducto;
