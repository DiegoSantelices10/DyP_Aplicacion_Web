import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Button'


export default function menudropdown() {
    return (

        <div className="max-w-lg mx-auto">
          <button className="text-gray-700 border-gray-300  focus:ring-4 
          focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 border-2
          text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">
            Menu<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>

            
          <div className="hidden bg-red text-base z-50  divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
            
            <ul className="py-1" aria-labelledby="dropdown">
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      )
    
    }