import React from 'react'
import AccessMenu from 'components/accessmenu'
import { useFormik } from 'formik'


export default function Create() {

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
          product: "",
          description: "",
          category: "",
          price: "",
        },
        onSubmit: async function (values) {
    
        },
      });
    

    return (
        <>
            <AccessMenu />
            <form className="w-3/5 h-auto px-10 mx-auto mt-5"
                onSubmit={handleSubmit}>
                <h1 className=" text-3xl font-poppins font-extrabold text-zinc-800 pb-5">¡Ingresa un producto nuevo!</h1>
                <div className="grid grid-cols-2 mt-4 justify-items-end gap-4">
                    <div className="w-full mx-auto">
                        <label
                            htmlFor="producto"
                            className="block  text-sm  text-slate-400" >
                            Nombre del producto
                        </label>
                        <input
                            id="producto"
                            name="producto"
                            type="text"
                            onChange={handleChange}
                            value={values.product}
                            className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className=" w-full mx-auto">
                        <label
                            htmlFor="categoria"
                            className="block  text-sm  text-slate-400" >
                            Categoria
                        </label>
                        <input
                            id="categoria"
                            name="categoria"
                            type="text"
                            onChange={handleChange}
                            value={values.description}
                            className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>




                    <div className=" w-full mx-auto col-start-1 col-end-3">
                        <label
                            htmlFor='descripcion'
                            className="block text-sm  text-slate-400" >
                            Descripcion
                        </label>
                        <input
                            id="descripcion"
                            name="descripcion"
                            type="text"
                            onChange={handleChange}
                            value={values.category}
                            className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>


                    <div className=" w-full mx-auto">
                        <label
                            htmlFor="precio"
                            className="block  text-sm  text-slate-400" >
                            Precio
                        </label>
                        <input
                            id="precio"
                            name="precio"
                            type="text"
                            onChange={handleChange}
                            value={values.price}
                            className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className=" w-full mx-auto">
                        <label
                            htmlFor="imagen"
                            className="block  text-sm  text-slate-400" >
                            Cargar Imagen
                        </label>
                        <input
                            id="imagen"
                            name="imagen"
                            type="text"
                            onChange={handleChange}
                            value={values.price}
                            className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <button className="w-60 h-12  col-start-2
                        rounded-2xl  text-sm 
                        border text-white bg-gradient-to-r 
                        from-cyan-500 to-indigo-500 "

                        type="button">
                        Agregar Producto
                    </button>
                </div>
            </form>
        </>
    )
}
Create.layout = "L2";