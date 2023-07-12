
import Head from "next/head";
import Image from "next/future/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({children, pagina}) {
    return (
      <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name="description" content="quiosco cafeteria"/>
        </Head>

        <div className=" md:flex">
            <aside className=" md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Image src={"/assets/img/logo.svg"} width={200} height={100} alt="imagen logo"/>
            </aside>

            <main className=" md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className=" p-10">
                  {children}
                </div>
            </main>
        </div>
        <ToastContainer/>    
      </>
    )
  }