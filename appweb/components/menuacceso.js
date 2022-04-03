import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BiHome, BiCog, BiDollarCircle, BiShoppingBag, BiGift, BiCoffeeTogo } from "react-icons/bi";


export default function menuacceso() {
  return (
    <div className="flex justify-center w-11/12 mx-auto  h-auto py-5 gap-4">

      <Link href="../admin/home">
        <button className="bg-white rounded-full shadow-md   h-auto w-full">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '35px' }}>
              <BiHome className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-semibold text-zinc-800">Home</p>
          </div>
        </button>
      </Link>




      <Link href="../productos/productos">
        <button className="bg-white rounded-full  shadow-md  h-auto w-full">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '35px' }}>
              <BiCoffeeTogo className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-semibold text-zinc-800">Productos</p>
          </div>
        </button>
      </Link>

      

      <Link href="../ventas/ventas">
        <button className="bg-white rounded-full  shadow-md  h-auto  w-full">
          <div className="mt-1" >
            <IconContext.Provider value={{ color: '#075985', size: '35px' }}>
              <BiDollarCircle className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-semibold text-zinc-800">Ventas</p>
          </div>
        </button>
      </Link>

      <Link href="../promociones/promociones">
        <button className="bg-white rounded-full  shadow-md   h-auto  w-full">
          <div className="mt-1" >
            <IconContext.Provider value={{ color: '#075985', size: '35px' }}>
              <BiGift className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-semibold text-zinc-800">Promociones</p>
          </div>
        </button>
      </Link>

      <Link href="../ajustes/ajustes">
        <button className="bg-white rounded-full  shadow-md  h-auto  w-full ">
          <div className="mt-1">
            <IconContext.Provider value={{ color: '#075985', size: '35px' }}>
              <BiCog className="mx-auto" />
            </IconContext.Provider>
            <p className="text-lg font-poppins font-semibold text-zinc-800">Ajustes</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
