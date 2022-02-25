import React from 'react'

export default function layoutWelcome() {
  return (
    <div className="absolute mt-12 w-full xl:w-3/4 lg:w-11/12 flex justify-center">
    <div className="w-full  bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>
    <div className="w-full xl:w-1/2 lg:w-1/2 md:w-3/4 bg-white p-5 rounded-none lg:rounded-l-none lg:rounded-r-lg ">
      <h3 className="pt-4 text-2xl text-center">Bienvenidos</h3>
    </div>
  </div>
  )
}
