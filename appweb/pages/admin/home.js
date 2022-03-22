import React from 'react'
import Navbar from '../../components/navbar'
import Container from '../../components/container'
import Menuacceso from '../../components/menuacceso';

export default function home() {
  return (
    <Container >
      <Navbar />
      <div className="bg-white h-28">
        <div className="relative container mx-auto flex justify-center text-center w-full gap-14 py-4">
          <div className="w-1/6 py-6 shadow rounded bg-slate-50">Mensaje</div>
          <div className="w-1/6 py-6 shadow rounded bg-slate-50">Mensaje</div>
          <div className="w-1/6 py-6 shadow rounded bg-slate-50">Mensaje</div>
          <div className="w-1/6 py-6 shadow rounded bg-slate-50">Mensaje</div>
        </div>
      </div>

      <Menuacceso/>
    </Container>
  )
}
