import { React, Dropdown, Toggle } from 'react'
import { IconContext } from "react-icons";
import { AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";
import Menudropdown from './menudropdown'
import Link from 'next/link'

export default function navbar() {
  return (
    <nav className="bg-white border-b-2 border-b-slate-400 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <Menudropdown />
        </div>

        <Link href="../admin/home">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              D&P
            </span>
          </a>
        </Link>







        <div className="hidden w-full md:block md:w-auto pl-14" id="mobile-menu">
          <IconContext.Provider value={{ className: "global-class-name", size: "27px" }}>
            <div>
              <AiOutlinePoweroff />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  )
}
