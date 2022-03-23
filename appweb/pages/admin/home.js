import React from 'react'
import Navbar from '../../components/navbar'
import Container from '../../components/container'
import Menuacceso from '../../components/menuacceso';
import Liveinfo from '../../components/liveinfo'
export default function home() {
  return (
    <Container>
      <Navbar/>
      <Liveinfo/>
      <Menuacceso />
      <div className="h-full">
        <div className="w-11/12 h-full flex  mx-auto gap-4 text-center">
          <div className="w-full h-28 rounded shadow bg-white ">Pedido 1</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 2</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 3</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 4</div>
        </div>
        <div className="w-11/12 h-full flex  mx-auto gap-4 text-center mt-4">
          <div className="w-full h-28 rounded shadow bg-white ">Pedido 5</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 6</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 7</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 8</div>
        </div>
        <div className="w-11/12 h-full flex  mx-auto gap-4 text-center mt-4">
          <div className="w-full h-28 rounded shadow bg-white">Pedido 9</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 10</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 11</div>
          <div className="w-full h-28 rounded shadow bg-white">Pedido 12</div>
        </div>
      </div>

    </Container>
  )
}
