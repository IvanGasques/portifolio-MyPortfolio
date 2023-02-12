import React from 'react'
import './style'
import { ContainerMenu } from './style'
import './menu.css'

import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <ContainerMenu>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutme">About</Link></li>
        <li><Link to="/projects">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </ContainerMenu>
  )
}

export default Menu
