import React from 'react'
import AccessMenu from '../components/accessmenu';
import { getSession } from 'next-auth/react'

export default function Home({session}) {
  return (
    
    <div className="h-auto">
      <AccessMenu />
        <div className=" w-11/12 h-auto flex justify-center mx-auto py-5 gap-4 text-center">
          
          <div className="w-64 h-auto bg-white rounded-2xl shadow-md p-3">
            <div className="w-auto text-sm">
                <h2 className="text-right">#0001</h2>
                <div className="text-left text-xs py-2">
                    <h5>Porcion Brownie</h5>
                    <h5>Torta coco c/ddl</h5>
                    <h5>Smoothie frutilla x2</h5>
                </div>
            </div>
            <div className="flex justify-end gap-3">
              <div>
              <button type="button" className="bg-green-400 p-2">Recibido</button></div>
              <div>
              <button type="button" className="bg-blue-500 p-2">Liberado</button></div>
            </div>
          </div>
          <div className="w-64 h-auto bg-white rounded-2xl shadow-md p-3">
            <div className="w-auto text-sm">
                <h2 className="text-right">#0001</h2>
                <div className="text-left text-xs py-2">
                    <h5>Porcion Brownie</h5>
                    <h5>Torta coco c/ddl</h5>
                    <h5>Smoothie frutilla x2</h5>
                </div>
            </div>
            <div className="flex justify-end gap-3">
              <div>
              <button type="button" className="bg-green-400 p-2">Recibido</button></div>
              <div>
              <button type="button" className="bg-blue-500 p-2">Liberado</button></div>
            </div>
          </div>
          <div className="w-64 h-auto bg-white rounded-2xl shadow-md p-3">
            <div className="w-auto text-sm">
                <h2 className="text-right">#0001</h2>
                <div className="text-left text-xs py-2">
                    <h5>Porcion Brownie</h5>
                    <h5>Torta coco c/ddl</h5>
                    <h5>Smoothie frutilla x2</h5>
                </div>
            </div>
            <div className="flex justify-end gap-3">
              <div>
              <button type="button" className="bg-green-400 p-2">Recibido</button></div>
              <div>
              <button type="button" className="bg-blue-500 p-2">Liberado</button></div>
            </div>
          </div>
          <div className="w-64 h-auto bg-white rounded-2xl shadow-md p-3">
            <div className="w-auto text-sm">
                <h2 className="text-right">#0001</h2>
                <div className="text-left text-xs py-2">
                    <h5>Porcion Brownie</h5>
                    <h5>Torta coco c/ddl</h5>
                    <h5>Smoothie frutilla x2</h5>
                </div>
            </div>
            <div className="flex justify-end gap-3">
              <div>
              <button type="button" className="bg-green-400 p-2">Recibido</button></div>
              <div>
              <button type="button" className="bg-blue-500 p-2">Liberado</button></div>
            </div>
          </div>






       
        </div>
       
      </div>

    
  )
}
Home.layout = "L2"
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