import Button from './button'

export default function Form(props) {
  return (
    <form className={`px-10 pt-6 pb-4  bg-white rounded `}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
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
        <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
          Contraseña Nueva
        </label>
        <input
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <Button msg="Sign In" className="bg-sky-700 hover:bg-sky-600" />

    </form>
  )
}
