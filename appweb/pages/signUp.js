import Button from '../components/button'
import LayoutWelcome from '../components/layoutWelcome'
import Form from '../components/form'
import Container from '../components/container'

export default function SignUp() {
    return (
        <Container>
            <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className="flex w-full h-full justify-center items-center">
                    <div className="w-full h-full sm:h-3/4  xl:w-3/4 lg:w-11/12 md:w-11/12  flex justify-center">
                        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-3/4  bg-white p-5 rounded-none lg:rounded-l-none lg:rounded-r-lg ">
                            <h3 className="pt-4 text-2xl text-center">Ingresa tus datos</h3>
                            <Form />
                        </div>
                        <div className="w-full  bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
