import React from 'react'
import Image from 'next/image'


export default function Profile() {
  return (
    <div className="w-1/3 text-center">
        <div className="mx-auto">
          <Image src="/images/liebreblack.png" width={95} height={80} />
        </div>
        <h1 className=" text-3xl font-bold">¡Registra tu negocio!</h1>
      <p className="text-md font-medium">Registrate en simples pasos y empieza a hacer crecer tu negocio junto a nosotros.</p>
    </div>
  )
}

Profile.layout = "L1"
