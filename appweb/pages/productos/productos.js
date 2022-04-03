import React from 'react'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Menuacceso from '../../components/menuacceso'


export default function productos() {
  return (
    <Container >
      <Navbar />
        <Menuacceso />
      <div className="h-screen fixed w-full">
        <div className="w-11/12 h-auto text-center flex justify-center py-10 mx-auto">
            <div className="w-2/6 h-full">
              <h1 className="text-3xl font-poppins font-extrabold text-zinc-800 text-center pb-11">¿Que deseas hacer?</h1>
              <div className="w-full">
                <button className="mx-auto w-60 py-2 h-12 mt-5 rounded-2xl  text-sm 
                                        border text-white bg-gradient-to-r 
                                        from-cyan-500 to-indigo-500 "
                  type="button">
                  Modificar Producto
                </button>
              </div>
              <div className="w-full mt-6">
                <button className=" mx-auto w-60 py-2 h-12 mt-5
                                    rounded-2xl  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                  type="button">
                  Eliminar Producto
                </button>
              </div>
            </div>
            
              <form className="w-3/5 h-auto px-10">
                <h1 className=" text-3xl font-poppins font-extrabold text-zinc-800 pb-5">Ingresa un producto nuevo.</h1>
                <div className="grid grid-cols-2 mt-4 justify-items-end">
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

                  <button className="w-60 h-12 mt-5 col-start-2
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
    </Container>
  )
}
