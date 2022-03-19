import React from 'react'
import Navbar from '../../components/navbar'
import Container from '../../components/container'
import Menuacceso from '../../components/menuacceso';

export default function home() {
  return (
    <Container >
      <Navbar />
      <div className="bg-white h-28">
        <div className="absolute container mx-auto flex justify-center text-center m-5 gap-x-8">
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
        </div>
      </div>

      <Menuacceso/>
<p>Home</p>
    </Container>
  )
}
