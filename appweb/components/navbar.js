import { React} from 'react'
import { IconContext } from "react-icons";
import { AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";
import Mydropdown from './mydropdown'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, getSession } from 'next-auth/react';


export default function navbar() {
  return (
    <nav className="flex justify-between bg-white border-b border-b-gray-500 px-2 sm:px-4 h-14 font-roboto ">
        
        <div className="my-auto">
            <Mydropdown/>
        </div>
    
        <div className="my-auto">
        <Link href="/admin/home">
          <a className="flex items-center">
          <Image src="/images/liebreblack.png" width={50} height={40}/>
          </a>
        </Link>
        </div>

        <div className="hidden md:block md:w-auto pl-14 my-auto" id="mobile-menu">
          <IconContext.Provider value={{ className: "global-class-name", size: "26px", color: '#3b50b2' }}>
            <div>
              <a onClick={() => signOut()}>
              <AiOutlinePoweroff  />
              </a>            
            </div>
          </IconContext.Provider>
        </div>
    </nav>
  )
}

