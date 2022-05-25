import { React, useEffect} from 'react'
import Mydropdown from './mydropdown'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, getSession } from 'next-auth/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons' 


export default function navbar() {  
  return (
    <nav className="flex justify-between bg-white border-b border-b-gray-500 px-2 sm:px-4 h-14 font-roboto ">
        <div className="my-auto">
            <Mydropdown/>
        </div>
        <div className="my-auto">
        <Link href="/">
          <a className="flex items-center">
          <Image src="/images/liebreblack.png" width={50} height={40}/>
          </a>
        </Link>
        </div>

        <div className="hidden md:block md:w-auto pl-14 my-auto" id="mobile-menu">
              <Link href="../" >
                <a onClick={() => signOut()}>
                <FontAwesomeIcon icon={faArrowRightToBracket} size="xl" />
              </a>
              </Link>          
        </div>
    </nav>
  )
}

