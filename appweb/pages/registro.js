import Button from '../components/button'
import LayoutWelcome from '../components/layoutWelcome'
import Form from '../components/form'
import Container from '../components/container'

export default function Registro() {
    return (
        <Container>
            <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center ">
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-3/4 bg-white p-5 rounded-none  lg:rounded-r-lg lg:rounded-l-lg ">
                    <h3 className="pt-4 text-2xl text-center">Registro de usuario</h3>
                   
                   
                   
                   
                    <form className=" bg-white flex flex-wrap">
                            <div className="w-full md:w-full lg:w-1/2  p-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Nombre de Usuario
                                </label>
                                <input
                                    className="w-full py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="w-full md:w-full lg:w-1/2 p-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Nombre de tu local
                                </label>
                                <input
                                    className="w-full py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            
                    </form>
                </div>
            </div>

        </Container >
    )
}
