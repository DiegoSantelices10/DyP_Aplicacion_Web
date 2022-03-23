import React from 'react'
import Container from '../../components/container'
import Navbar from '../../components/navbar'
import Menuacceso from '../../components/menuacceso'
import Liveinfo from '../../components/liveinfo'

export default function pedidos() {
  return (
    <Container >
      <Navbar />
      <Liveinfo />
      <Menuacceso />
      <p>Pedidos</p>
    </Container>
  )
}
