
import Button from '../components/button'
import Form from '../components/form'
import Image from 'next/image'
import Container from '../components/container'
export default function Index() {
  return (
  <Container className="w-full">
  <div className="h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 ">
      <div className="h-full w-full flex items-center justify-center">
        <div className="grid content-center rounded-md shadow-lg bg-white w-full h-full p-8 lg:w-96 lg:h-auto md:w-1/2 md:h-auto">
        <div className="w-auto mx-auto py-2">
        <Image src="/images/liebreblack.png" width={95} height={80}/>
        </div>
          <Form />
          <hr className="bg-black my-5 mx-auto w-3/4"></hr>
          <div className="mb-4 text-center ">
            <Button msg="Iniciar sesion con Google" className="font-roboto border-2 border-slate-300 text-slate-400 hover:border-red-300 hover:text-red-400" />
          </div>
          <div className="text-center ">
            <Button msg="Registrate con Google" className="font-roboto  bg-red-600 hover:bg-red-700" />
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}
