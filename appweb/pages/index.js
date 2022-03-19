
import Button from '../components/button'
import Form from '../components/form'
import Container from '../components/container' 


export default function Index() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 font-sans">
      <div className="h-full w-full flex items-center justify-center">
        <div className="grid content-center rounded-md shadow-lg bg-white w-full h-full p-5 lg:w-1/4 lg:h-auto md:w-1/2 md:h-auto">
          <Form />
          <hr className="bg-black my-5 mx-auto w-3/4"></hr>
          <div className="mb-4 text-center ">
            <Button msg="Sign up with google" className=" bg-red-600 hover:bg-red-600" />
          </div>
          <div className="text-center ">
            <Button msg="Sign In with google" className="bg-sky-700 hover:bg-sky-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
