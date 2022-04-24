import { signIn, getSession } from 'next-auth/react';
import Image from 'next/image'
import Form from '../components/form'

export default function Login() {

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
          <h1 className="font-bold"> ¡Bienvenido, ingresá a tu cuenta!</h1>
        </div>
        <Form />
        <hr className="bg-black my-5 mx-auto w-3/4"></hr>

        <div className="mb-4 text-center ">
          <button onClick={() => signIn("google")}
            className="flex items-center w-full px-4 py-2 h-12
                                    rounded-md  focus:outline-none 
                                    focus:shadow-outline text-sm 
                                    border text-slate-600 
                                    hover:border-red-300 hover:text-red-400"
            type="button">
            <Image src="/images/LogoGoogle.png" width={18} height={18} />
            <p className="pl-20">Iniciar sesion con Google</p>
          </button>
        </div>
      </div>
    </div>
  </div >
);
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: "/signUp",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};