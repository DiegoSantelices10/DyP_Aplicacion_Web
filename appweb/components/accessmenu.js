import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function accessmenu() {
  return (
    <div className="flex relative justify-center w-11/12 mx-auto h-auto py-4 gap-4 ">

      <Link href="../">
        <button className="bg-white rounded-2xl shadow-md   h-auto w-44">
          <div>
            <Image src="/images/pedidosblack.png"  width={65} height={65}/> 
            <p className="text-md font-poppins font-medium text-zinc-800 m-0 p-0">Pedidos</p>
          </div>
        </button>
      </Link>




      <Link href="../products">
        <button className="bg-white rounded-2xl  shadow-md  h-auto w-44">
          <div>
          <Image src="/images/productsblack.png"  width={65} height={65}/> 

            <p className="text-md font-poppins font-medium text-zinc-800">Productos</p>
          </div>
        </button>
      </Link>

      

      <Link href="../sales">
        <button className="bg-white rounded-2xl  shadow-md  h-auto  w-44">
          <div>
          <Image src="/images/salesblack.png"  width={65} height={65}/> 

            <p className="text-md font-poppins font-medium text-zinc-800">Ventas</p>
          </div>
        </button>
      </Link>

      <Link href="../promotions">
        <button className="bg-white rounded-2xl  shadow-md   h-auto  w-44">
          <div>
          <Image src="/images/promotionsblack.png"  width={65} height={65}/> 

            <p className="text-md font-medium text-zinc-800">Promociones</p>
          </div>
        </button>
      </Link>

      <Link href="../settings">
        <button className="bg-white rounded-2xl  shadow-md  h-auto  w-44 ">
          <div>
            <Image src="/images/settingsblack.png"  width={65} height={65}/> 
            <p className="text-md font-poppins font-medium text-zinc-800">Ajustes</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
