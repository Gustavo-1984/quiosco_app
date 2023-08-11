import { useEffect, useCallback } from "react"
import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

    

    return (
        <Layout pagina="Total y Confirmar Pedido">
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
            <form onSubmit={colocarOrden}>
                <div>
                    <label className="block text-slate-800 text-xl font-bold" htmlFor="nombre">Nombre</label>
                    <input 
                        className="w-full border bg-slate-800 lg:w-1/3 rounded-md mt-3 p-2" 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} 
                    />
                </div>
                <div className="mt-10"> 
                    <p className="text-2xl">Total a pagar {''} <span className="font-bold">{formatearDinero(total)}</span> </p>
                </div>
                <div className="mt-5">
                    <input 
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto text-white font-bold py-2 px-4 uppercase rounded-md text-center`} 
                        type="submit" 
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    
    )
}