import React from 'react'
import { FaShoppingBag, FaRegSun, FaPercentage, FaMoneyBillWave, FaAppleAlt } from "react-icons/fa";
import Link from 'next/link'
import { IconContext } from 'react-icons'

export default function menuacceso() {
  return (
    <div className="flex justify-center w-full  h-full mt-8 text-gray-600">
      <Link href="../productos/productos">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-20 text-lg w-52 ">
          <IconContext.Provider value={{ color: '#3b50b2', size: '24px' }}>
            <div>
              <FaAppleAlt className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Productos</p>
        </button>
      </Link>

      <Link href="../pedidos/pedidos">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-20 text-lg w-52">
          <IconContext.Provider value={{ color: '#3b50b2', size: '24px' }}>
            <div>
              <FaShoppingBag className="mx-auto " />
            </div>
          </IconContext.Provider>
          <p>Pedidos</p>
        </button>
      </Link>

      <Link href="../ventas/ventas">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-20 text-lg w-52">
          <IconContext.Provider value={{ color: '#3b50b2', size: '24px' }}>
            <div>
              <FaMoneyBillWave className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Ventas</p>
        </button>
      </Link>

      <Link href="../promociones/promociones">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-20 text-lg w-52">
          <IconContext.Provider value={{ color: '#3b50b2', size: '24px' }}>
            <div>
              <FaPercentage className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Promociones</p>
        </button>
      </Link>

      <Link href="../ajustes/ajustes">
        <button className="bg-white rounded-sm  shadow border-solid border-gray-500 h-20 text-lg w-52">
          <IconContext.Provider value={{ color: '#3b50b2', size: '24px' }}>
            <div>
              <FaRegSun className="mx-auto" />
            </div>
          </IconContext.Provider>
          <p>Ajustes</p>
        </button>
      </Link>



    </div>
  )
}
