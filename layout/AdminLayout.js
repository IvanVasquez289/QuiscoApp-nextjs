
import Head from "next/head";
import Image from "next/future/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
export default function AdminLayout({children, pagina}) {
    const router = useRouter()
    // console.log(router.pathname)
    return (
      <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name="description" content="quiosco cafeteria"/>
        </Head>

        <div className=" md:flex">
            <aside className=" md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Image src={"/assets/img/logo.svg"} width={200} height={100} alt="imagen logo"/>
                <div className="mt-10">
                    <div 
                      className={`${router.pathname == '/admin' ? 'bg-amber-400' : ''} border p-4 hover:bg-amber-400 cursor-pointer text-2xl font-bold`}
                      onClick={()=>{
                        router.push('/admin')
                      }}
                    >
                      Ordenes pendientes
                    </div>
                    <div 
                      className={`${router.pathname == '/ordenesCompletadas' ? 'bg-amber-400' : ''} border p-4 hover:bg-amber-400 cursor-pointer text-2xl font-bold`}
                      onClick={()=>{
                        router.push('/ordenesCompletadas')
                      }}
                    >
                      Ordenes completadas
                    </div>
                    
                </div>
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