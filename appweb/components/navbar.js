import { React, useEffect } from "react";
import Mydropdown from "./mydropdown";
import Link from "next/link";
import Image from "next/image";
import { signOut, getSession } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  return (
    <nav className="flex sticky top-0 z-50  justify-between bg-white shadow-md shadow-slate-300/50 w-full  sm:px-4 p-3 font-roboto ">
      <div className="my-auto">
        <Mydropdown />
      </div>
      <div className="my-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/images/liebreblack.png" width={50} height={40} />
          </a>
        </Link>
      </div>

      <div className="hidden md:block md:w-auto pl-14 my-auto" id="mobile-menu">
        <Link href="/">
          <a onClick={() => signOut()}>
            <FontAwesomeIcon
              className="fuchsia-900"
              icon={faArrowCircleRight}
              size="xl"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
