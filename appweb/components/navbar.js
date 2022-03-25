import { React} from 'react'
import { IconContext } from "react-icons";
import { AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";
import Menudropdown from './menudropdown'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
  return (
    <nav className="bg-white border-b border-b-gray-500 px-2 sm:px-4 py-2 font-roboto">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="h-auto">
            <Menudropdown/>
           </div>
        <Link href="../admin/home">
          <a className="flex items-center">
          <Image src="/images/liebreblack.png" width={50} height={40}/>
          </a>
        </Link>
        <div className="hidden w-full md:block md:w-auto pl-14" id="mobile-menu">
          <IconContext.Provider value={{ className: "global-class-name", size: "26px", color: '#3b50b2' }}>
            <div>
              <AiOutlinePoweroff />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  )
}
