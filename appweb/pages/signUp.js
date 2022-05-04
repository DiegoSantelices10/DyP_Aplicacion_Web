import Button from '../components/button'
import Form from '../components/form'


export default function SignUp() {
    return (
            <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className="flex w-full h-full justify-center items-center">
                    <div className="w-full h-full sm:h-3/4  xl:w-3/4 lg:w-11/12 md:w-11/12  flex justify-center">
                        <div className="w-full xl:w-11/12 lg:w-1/2 md:w-3/4  bg-white p-5 rounded-none lg:rounded-l-none lg:rounded-r-lg ">
                            <h3 className="pt-4 text-2xl text-center">Datos del comercio</h3>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
    )
}
