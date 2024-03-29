import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import Form from "../components/form";

export default function Login() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 ">
      <div className="h-full w-4/5 flex items-center justify-between mx-auto">
        <div className="w-2/5 text-center text-white">
          <div className="mx-auto">
            <Image src="/images/liebre.png" width={95} height={80} />
          </div>
          <h1 className=" text-3xl font-bold">¡Registra tu negocio!</h1>
          <p className="text-md font-medium">
            Registrate en simples pasos y empieza a hacer crecer tu negocio
            junto a nosotros.
          </p>
        </div>

        <div
          className="grid content-center rounded-md shadow-lg bg-white w-full 
          h-full p-8 lg:w-5/12 lg:h-auto md:w-1/2 md:h-auto"
        >
          <div className="w-auto mx-auto py-3">
            <h1 className="font-bold"> ¡Bienvenido, ingresá a tu cuenta!</h1>
          </div>
          <Form mensaje="hola" />
          <div
            className="flex items-center my-6 before:flex-1 
                    before:border-t before:border-gray-300 
                    before:mt-0.5 after:flex-1 after:border-t 
                    after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center text-xs text-slate-400 mx-4 mb-0">
              o Registrate con
            </p>
          </div>
          <div className="text-center mx-auto ">
            <button
              onClick={() => signIn("google")}
              className="flex items-center"
              type="button"
            >
              <Image src="/images/logogoogle.png" width={35} height={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Login.layout = "L1";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
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
