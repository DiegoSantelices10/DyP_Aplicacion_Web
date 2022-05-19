import Button from '../components/button'
import Image from 'next/image'
export default function SignUp() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 ">
      <div className="h-full w-4/5 flex items-center justify-between mx-auto">

          
        <div className="text-white">
          <Image src="/images/liebreblack.png" width={95} height={80} />
          <h1 className=" text-3xl font-bold">¡Registra tu negocio!</h1>
          <p className=" text-md font-medium w-2/3">Registrate en simples pasos y empieza a hacer crecer tu negocio junto a nosotros.</p>
        </div>
      
        <div className="grid content-center rounded-md shadow-lg bg-white w-full 
          h-full p-8 lg:w-5/12 lg:h-auto md:w-1/2 md:h-auto">
          <div className="w-auto mx-auto py-3">
            <h1 className="font-bold"> ¡Registrate!</h1>
          </div>

        
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



      </div>
    </div >
  );
}
SignUp.layout = "L1";
