import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function accessmenu() {
  return (
    <div className="flex relative justify-center space-x-10 container mx-auto h-auto py-5">
      <Link href="../">
        <button className="bg-white rounded-2xl shadow-md p-2  h-auto w-36">
          <div>
            <Image src="/images/pedidosblack.png"  width={60} height={60}/> 
            <p className="font-bold text-lg">Pedidos</p>
          </div>
        </button>
      </Link>




      <Link href="../products">
        <button className="bg-white rounded-2xl  shadow-md p-2  h-auto w-36">
          <div>
          <Image src="/images/productsblack.png"  width={60} height={60}/> 
            <p className="font-bold text-lg">Productos</p>
          </div>
        </button>
      </Link>

      

      <Link href="../sales">
        <button className="bg-white rounded-2xl  shadow-md p-2  h-auto  w-36">
          <div>
          <Image src="/images/salesblack.png"  width={60} height={60}/> 
            <p className="font-bold text-lg">Ventas</p>
          </div>
        </button>
      </Link>

      <Link href="../promotions">
        <button className="bg-white rounded-2xl  shadow-md p-2 h-auto  w-36">
          <div>
          <Image src="/images/promotionsblack.png"  width={60} height={60}/> 
            <p className="font-bold text-lg">Promociones</p>
          </div>
        </button>
      </Link>

      <Link href="../settings">
        <button className="bg-white rounded-2xl  shadow-md p-2 h-auto  w-36 ">
          <div>
            <Image src="/images/settingsblack.png"  width={60} height={60}/> 
            <p className="font-bold text-lg">Ajustes</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
