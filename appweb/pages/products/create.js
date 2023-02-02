import Swal from "sweetalert2";
import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import cloudinaryImage from "utils/cloudinaryImage";

export default function Create() {
  return (
    <div className="w-3/5 h-auto px-10 mx-auto mt-5">
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          category: "",
          image: "",
        }}
        onSubmit={(values) => {
           axios
             .post("http://localhost:3000/api/products", values)
             .then((res) => {
               Swal.fire({icon:"success", title: "Producto cargado con exito"}) 
               console.log(res);
             });
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          setFieldValue,
        }) => (
          <Form>
            <h1 className=" text-3xl font-poppins font-extrabold text-zinc-800 pb-5">
              ¡Ingresa un producto nuevo!
            </h1>
            <div className="grid grid-cols-2 mt-4 justify-items-end gap-4">
              <div className="w-full mx-auto">
                <label
                  htmlFor="name"
                  className="block  text-sm  text-slate-400"
                >
                  Nombre del producto
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className=" w-full mx-auto">
                <label
                  htmlFor="category"
                  className="block  text-sm  text-slate-400"
                >
                  Categoria
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className=" w-full mx-auto col-start-1 col-end-3">
                <label
                  htmlFor="description"
                  className="block text-sm  text-slate-400"
                >
                  Descripcion
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className=" w-full mx-auto">
                <label
                  htmlFor="price"
                  className="block  text-sm  text-slate-400"
                >
                  Precio
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className=" w-full mx-auto">
                <label
                  htmlFor="image"
                  className="block  text-sm  text-slate-400"
                >
                  Cargar Imagen
                </label>
                <input
                  name="image"
                  type="file"
                  onChange={(e) => cloudinaryImage(e.target, setFieldValue)}
                  className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                  rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                className="w-60 h-12  col-start-2
                        rounded-2xl  text-sm 
                        border text-white bg-gradient-to-r 
                        from-cyan-500 to-indigo-500 "
                type="submit"
              >
                Agregar Producto
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
Create.layout = "L2";
