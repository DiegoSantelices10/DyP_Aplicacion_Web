import React from "react";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  return (
    <div className="h-auto px-10">
      <div className="w-full bg-white min-h-screen  mx-auto text-center p-4 rounded-md ">
        <div className="flex flex-wrap justify-start gap-4 mx-auto">
          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>
          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>
          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>

          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>
          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>
          <div className="w-[19%] h-40 bg-white rounded- shadow-md p-3 border-2">
            <div className="w-auto text-sm">
              <h2 className="text-right">#0001</h2>
              <div className="text-left text-xs py-3 font-medium">
                <h5>Porcion Brownie</h5>
                <h5>Torta coco c/ddl</h5>
                <h5>Smoothie frutilla x2</h5>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-xs font-medium  
                                 shadow focus:outline-none focus:ring transition 
                                 text-slate-300  hover:bg-blue-100 
                                 active:bg-blue-200 focus:ring-blue-300"
                type="submit"
              >
                Liberar
              </button>
              <button
                className="px-4 py-2 rounded-md text-xs font-medium border shadow
                                 focus:outline-none focus:ring transition text-white 
                               bg-blue-500  hover:bg-blue-600 
                               hover:border-white active:bg-blue-700 focus:ring-blue-300"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Home.layout = "L2";
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

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
