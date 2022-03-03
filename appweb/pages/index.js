
import Button from '../components/button'
import Form from '../components/form'
import Container from '../components/container'


export default function Index() {
  return (
    <Container>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
            <div className="w-full  bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-3/4 bg-white p-5 rounded-none lg:rounded-l-none lg:rounded-r-lg ">
              <h3 className="pt-4 text-2xl text-center">Bienvenidos</h3>
              <Form />
              <hr className="bg-black my-5 mx-auto w-3/4"></hr>
              <div className="mb-4 text-center px-10 ">
                <Button msg="Sign up with google" className=" bg-red-600 hover:bg-red-600" />
              </div>
              <div className="mb-4 text-center px-10 ">
                <Button msg="Sign In with google" className="bg-sky-700 hover:bg-sky-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
