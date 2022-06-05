import AccessMenu from '../../components/accessmenu'
import Button from '../../components/button'
import { useFormik } from 'formik'
import Link from 'next/link';
export default function Products() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: async function (values) {

    },
  });
  return (
    <>
      <AccessMenu />
      <div className="flex w-11/12 mx-auto items-center gap-x-4 justify-between py-4">
        <form onSubmit={handleSubmit} className="flex w-1/2 items-center gap-x-2">
          <div className="w-2/3 mx-auto">
            <input
              id="query"
              name="query"
              type="text"
              placeholder="¿Que Desea Buscar?"
              onChange={handleChange}
              value={values.query}
              className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                         rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"/>
          </div>
          <button className="w-48 h-12 col-start-2
                             rounded-2xl  text-sm 
                             border text-white bg-gradient-to-r 
                           from-cyan-500 to-indigo-500 "
            type="button">Buscar
          </button>
        </form>
        <div className="flex w-1/2 items-center justify-end">
          <h1 className="text-xl font-poppins font-extrabold text-center
                       text-zinc-800 w-full ">¡Ingresa un producto nuevo!</h1>

          <Link href="/products/create">
          <button className="w-64 h-12 col-start-2
                             rounded-2xl  text-sm 
                             border text-white bg-gradient-to-r 
                           from-cyan-500 to-indigo-500 "
            type="button">Producto Nuevo
          </button>
          </Link>
        </div>



      </div>
      <div className="w-11/12 mx-auto grid  grid-cols-2 justify-items-center gap-x-3 gap-y-3">

        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md ">

          </div>
          <div className="w-28 h-28 shadow-md">

          </div>
        </div>
        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md  ">

          </div>
          <div className="w-28 h-28 shadow-md ">

          </div>
        </div>
        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md ">

          </div>
          <div className="w-28 h-28 shadow-md">

          </div>
        </div>
        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md  ">

          </div>
          <div className="w-28 h-28 shadow-md ">

          </div>
        </div>
        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md ">

          </div>
          <div className="w-28 h-28 shadow-md">

          </div>
        </div>
        <div className="w-full h-32 rounded shadow bg-white p-2  flex justify-between">
          <div className="w-28 h-28 bg-slate-500  ">

          </div>
          <div className="w-3/5 h-28 shadow-md  ">

          </div>
          <div className="w-28 h-28 shadow-md ">

          </div>
        </div>


      </div>
    </>
  )
}
Products.layout = "L2";