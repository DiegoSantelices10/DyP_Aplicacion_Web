import Button from './button'

export default function Form(props) {
  return (
    <div>
    <form className="font-roboto">
      <div className="mb-4">
        <label className="block mb-2 text-sm  text-slate-400" htmlFor="username">
          Usuario Nuevo
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-2 text-sm  text-slate-400" htmlFor="password">
          Contraseña Nueva
        </label>
        <input
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <Button msg="Iniciar sesion" className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:bg-cyan-600" />

    </form>
    </div>
  )
}
