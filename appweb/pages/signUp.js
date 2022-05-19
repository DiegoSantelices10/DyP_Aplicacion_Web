import Button from '../components/button'
import Image from 'next/image'

export default function SignUp() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 ">
      <div className="h-full w-4/5 flex items-center justify-between mx-auto">

      
        <div className="grid content-center rounded-md shadow-lg bg-white w-full 
          h-full p-8 lg:h-auto md:w-11/12 md:h-auto">
          <div className="w-auto mx-auto py-3">
            <h1 className="font-bold"> ¡Registrá tu comercio!</h1>
          </div>

        
          <form className="font-poppins">
            <div className="mb-4">
              <label className="block mb-2 text-sm  text-slate-400" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                           rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label className="block mb-2 text-sm  text-slate-400" htmlFor="apellido">
                Apellido
              </label>
              <input
                className="h-12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
                     rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                id="apellido"
                type="apellido"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm  text-slate-400" htmlFor="tel">
                Teléfono de contacto
              </label>
              <input
                className="h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                           rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                id="tel"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm  text-slate-400" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                           rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2 text-sm  text-slate-400" htmlFor="nomblocal">
                Nombre del local
              </label>
              <input
                className="h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
                           rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
                id="nomblocal"
                type="text"
                placeholder=""
              />
            </div>
            <button className="mx-auto w-full py-2 h-12 mt-5
                                    rounded-md  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
              onClick={() => router.push('../admin/')}
              type="button">
              ACEPTAR
            </button>

          </form>
          
        </div>



      </div>
    </div >
  );
}
SignUp.layout = "L1";
