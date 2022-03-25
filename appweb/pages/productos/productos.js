import React from 'react'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Menuacceso from '../../components/menuacceso'
import Liveinfo from '../../components/liveinfo'


export default function productos() {
  return (



    <Container >
      <Navbar />
      <Menuacceso />

      <div className="w-11/12 h-full flex  mx-auto gap-4 text-center">
        <div className="flex justify-between p-5 w-full">
          <div className="w-1/4">
            <h1>¿Que deseas hacer?</h1>
            <button className="mx-auto w-full py-2 h-12 mt-5
                                    rounded-md  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                type="button">
Modificar Producto
              </button>
              <button className="mx-auto w-full py-2 h-12 mt-5
                                    rounded-md  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                type="button">
Eliminar Producto
              </button>
          </div>
          <div className="w-1/4">
          <form >
      <div className="mb-4">
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
      <div className="mb-1">
        <label className="block mb-2 text-sm  text-slate-400" >
          Categoria
        </label>
        <input
          className="w-full h-12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="categoria"
          type="text"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-2 text-sm  text-slate-400" >
          Precio
        </label>
        <input
          className="w-full h-12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="precio"
          type="text"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-2 text-sm  text-slate-400" >
          Descripcion
        </label>
        <input
          className="w-full h-12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="descripcion"
          type="text"
        />
      </div>
      <button className="mx-auto w-full py-2 h-12 mt-5
                                    rounded-md  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                                    onClick={() => router.push('./admin/home')}
                type="button">
Agregar Producto
              </button>

    </form>
          </div>
        </div>
      </div>
    </Container>
  )
}
