import React from 'react'
import Menuacceso from '../components/menuacceso';
import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    
    <div className="h-full">
      <Menuacceso />
        <div className=" w-11/12 h-auto flex justify-center mx-auto py-5 gap-4 text-center">
          <div className="w-full h-28 rounded shadow bg-white ">Pedido 1</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 2</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 3</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 4</div>
        </div>
      </div>

    
  )
}


export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);
  console.log("hola servidor session")

  if (!session) {
    return {
      redirect: {
        destination: "/login",
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
