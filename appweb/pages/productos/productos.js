import React from 'react'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Menuacceso from '../../components/menuacceso'
import Liveinfo from '../../components/liveinfo'


export default function productos() {
  return (
    <Container >
      <Navbar />
<div className="h-screen fixed w-full">
      <Menuacceso />
      <div className="w-11/12 h-full mx-auto  text-center">
        <div className="flex align-items-center py-5 w-full">
          <div className="w-full">
            <h1 className="text-2xl font-poppins font-extrabold text-slate-700">¿Que deseas hacer?</h1>
            <div className="w-full mt-7">
              <button className="mx-auto w-1/2 py-2 h-12 mt-5 rounded-2xl  text-sm 
                                        border text-white bg-gradient-to-r 
                                        from-cyan-500 to-indigo-500 "
                type="button">
                Modificar Producto
              </button>
            </div>
            <div className="w-full mt-6">
              <button className=" mx-auto w-1/2 py-2 h-12 mt-5
                                    rounded-2xl  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                type="button">
                Eliminar Producto
              </button>
            </div>
          </div>





          <form className="w-full mx-auto">
            <h1 className=" text-2xl font-poppins font-extrabold text-slate-700">Ingresa un producto nuevo.</h1>
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="mb-1 w-full mx-auto">
                <label className="block mb-2 text-sm  text-slate-400" >
                  Nombre del producto
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                              rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="producto"
                  type="text"
                />
              </div>
              <div className="mb-1 w-full mx-auto">
                <label className="block mb-2 text-sm  text-slate-400" >
                  Descripcion
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                              rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="producto"
                  type="text"
                />
              </div>
              <div className="mb-1 w-full mx-auto">
                <label className="block mb-2 text-sm  text-slate-400" >
                  Categoria
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                              rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="producto"
                  type="text"
                />
              </div>
              <div className="mb-1 w-full mx-auto">
                <label className="block mb-2 text-sm  text-slate-400" >
                  Precio
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                              rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="producto"
                  type="text"
                />
              </div>

              <button className="w-auto py-2 h-12 mt-5 col-start-2
                                    rounded-2xl  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                onClick={() => router.push('./admin/home')}
                type="button">
                Agregar Producto
              </button>
            </div>
          </form>


        </div>
      </div>
      </div>
    </Container>
  )
}
