import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BiHome, BiCog, BiDollarCircle, BiShoppingBag, BiGift, BiCoffeeTogo } from "react-icons/bi";


export default function menuacceso() {
  return (
    <div className="flex justify-center  w-11/12 mx-auto  h-full py-6 text-gray-600 font-poppins">
      <Link href="../admin/home">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiHome className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Home</p>
        </button>
      </Link>

      <Link href="../productos/productos">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiCoffeeTogo className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Productos</p>
        </button>
      </Link>

      <Link href="../pedidos/pedidos">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiShoppingBag className="mx-auto " />
            </div>
          </IconContext.Provider>
          <p>Pedidos</p>
        </button>
      </Link>

      <Link href="../ventas/ventas">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiDollarCircle className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Ventas</p>
        </button>
      </Link>

      <Link href="../promociones/promociones">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiGift className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Promociones</p>
        </button>
      </Link>

      <Link href="../ajustes/ajustes">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-16 text-md w-full">
          <IconContext.Provider value={{ color: '#3b50b2', size: '25px' }}>
            <div className="mt-2">
              <BiCog className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Ajustes</p>
        </button>
      </Link>




    </div>
  )
}
