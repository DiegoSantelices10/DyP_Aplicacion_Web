import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BiHome, BiCog, BiDollarCircle, BiShoppingBag, BiGift, BiCoffeeTogo } from "react-icons/bi";


export default function menuacceso() {
  return (
    <div className="flex justify-center w-11/12 mx-auto  h-auto py-5 gap-4">

      <Link href="../admin/home">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiHome className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Home</p>
          </div>
        </button>
      </Link>




      <Link href="../productos/productos">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiCoffeeTogo className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Productos</p>
          </div>
        </button>
      </Link>

      <Link href="../pedidos/pedidos">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiShoppingBag className="mx-auto " />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Pedidos</p>
          </div>
        </button>
      </Link>

      <Link href="../ventas/ventas">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full">
          <div className="mt-1" >
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiDollarCircle className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Ventas</p>
          </div>
        </button>
      </Link>

      <Link href="../promociones/promociones">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full">
          <div className="mt-1" >
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiGift className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Promociones</p>
          </div>
        </button>
      </Link>

      <Link href="../ajustes/ajustes">
        <button className="bg-white rounded-full  shadow-md border-2 border-gray-300 h-16  w-full ">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '25px' }}>
              <BiCog className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-bold text-slate-600">Ajustes</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
