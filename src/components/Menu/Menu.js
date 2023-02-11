import React from 'react'
import './style'
import { ContainerMenu } from './style'
import './menu.css'

const Menu = () => {
  return (
    <ContainerMenu>
      <ul>
        <li><a className='test'>Home</a></li>
        <li><a className='test'>About</a></li>
        <li><a className='test'>Portfolio</a></li>
        <li><a className='test'>Contact</a></li>
      </ul>
    </ContainerMenu>
  )
}

export default Menu
