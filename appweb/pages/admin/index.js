import React from 'react'
import Navbar from '../../components/navbar'
import Container from '../../components/container'
import Menuacceso from '../../components/menuacceso';

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
