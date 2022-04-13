import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

export default function Mydropdown() {
  return (
    <div className="w-auto text-right fixe">
      <Menu as="div" className="relative inline-block text-left">

          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium border gap-2 
          text-gray-400  rounded-full  hover:bg-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75">
           Men&uacute;
           <MenuIcon className="h-4 w-4 my-auto"/>
          </Menu.Button>
  



        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >

          <Menu.Items className="absolute  w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'}       
                    group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'}       
                    group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Ayua
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'}       
                    group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

