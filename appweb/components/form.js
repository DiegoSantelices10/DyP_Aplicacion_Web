import { useRouter } from "next/router";

export default function Form({ mensaje }) {
  const router = new useRouter();

  return (
    <form className="grid grid-col-2 gap-6">
      <div className="col-start-1 col-end-3">
        <input
          className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Ingresa tu Correo electrónico"
        />
      </div>
      <div className="col-start-1 col-end-3">
        <input
          className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border 
          rounded-md shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Ingresa tu Contraseña"
        />
      </div>
      <button
        className="w-full px-4 py-2 h-12 rounded-md text-sm font-medium border-0 focus:outline-none 
                focus:ring transition text-slate-400 bg-blue-50 hover:text-blue-800 hover:bg-blue-100 
                active:bg-blue-200 focus:ring-blue-300"
        type="submit"
        onClick={() => router.push("/signUp")}
      >
        Crea tu cuenta
      </button>

      <button
        className=" w-full px-4 py-2 rounded-md text-sm font-medium border-0 
                       focus:outline-none focus:ring transition text-white 
                       bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
        type="submit"
        onClick={() => router.push("../")}
      >
        Iniciar sesion
      </button>
    </form>
  );
}
