
import {useRouter} from 'next/router'


export default function Form() {
const router = new useRouter();

  return (
    <div >
    <form className="font-poppins">
      <div className="mb-4">
        <label className="block mb-2 text-sm  text-slate-400" htmlFor="username">
          Usuario 
        </label>
        <input
          className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-2 text-sm  text-slate-400" htmlFor="password">
          Contraseña 
        </label>
        <input
          className="w-full h-12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <button className="mx-auto w-full py-2 h-12 mt-5
                                    rounded-md  text-sm 
                                    border text-white bg-gradient-to-r 
                                    from-cyan-500 to-indigo-500 "
                                    onClick={() => router.push('../admin/')}
                type="button">
Iniciar sesion
              </button>

    </form>
    </div>
  )
}
