import React from 'react'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Menuacceso from '../../components/menuacceso'

export default function pedidos() {
  return (
    <Container >
      <Navbar />
      <div className="bg-white h-28">
        <div className="absolute container mx-auto flex justify-around text-center m-5">
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
          <div className="h-15 w-1/4 py-5 shadow rounded bg-slate-50">Mensaje</div>
        </div>
      </div>

      <Menuacceso/>
<p>Pedidos</p>
    </Container>
  )
}
