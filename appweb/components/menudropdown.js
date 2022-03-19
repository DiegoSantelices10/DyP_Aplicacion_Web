import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default function menudropdown() {
    return (
        <div className="max-w-lg mx-auto">
            <button className="text-black bg-white hover:bg-slate-50 focus:ring-2 focus:ring-slate-400 gap-x-1 font-medium rounded-3xl border-2 border-slate-400 text-sm px-4 py-2 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">
                Menu
                <AiOutlineMenu/>
            </button>
            <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
                </div>
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
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
        </div>

    )
}
