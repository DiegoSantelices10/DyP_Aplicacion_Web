import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons' 


export default function accessmenu() {
  return (
    <div className="flex relative justify-center w-11/12 mx-auto h-auto py-4 gap-4 ">

      <Link href="../">
        <button className="bg-white rounded-full shadow-md   h-auto w-full">
          <div className="mt-1 p-2">
         <FontAwesomeIcon icon={faCannabis} size="xl"/>
            <p className="text-lg font-poppins font-medium text-zinc-800">Home</p>
          </div>
        </button>
      </Link>




      <Link href="../products">
        <button className="bg-white rounded-full  shadow-md  h-auto w-full">
          <div className="mt-1 p-2">
          <FontAwesomeIcon icon={faCannabis} size="xl"/>
            <p className="text-lg font-poppins font-medium text-zinc-800">Productos</p>
          </div>
        </button>
      </Link>

      

      <Link href="../sales">
        <button className="bg-white rounded-full  shadow-md  h-auto  w-full">
          <div className="mt-1 p-2" >
          <FontAwesomeIcon icon={faCannabis} size="xl"/>
            <p className="text-lg font-poppins font-medium text-zinc-800">Ventas</p>
          </div>
        </button>
      </Link>

      <Link href="../promotions">
        <button className="bg-white rounded-full  shadow-md   h-auto  w-full">
          <div className="mt-1 p-2" >
          <FontAwesomeIcon icon={faCannabis} size="xl"/>
            <p className="text-lg font-poppins font-medium text-zinc-800">Promociones</p>
          </div>
        </button>
      </Link>

      <Link href="../settings">
        <button className="bg-white rounded-full  shadow-md  h-auto  w-full ">
          <div className="mt-1 p-2">
          <FontAwesomeIcon icon={faCannabis} size="xl"/>
            <p className="text-lg font-poppins font-medium text-zinc-800">Ajustes</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
