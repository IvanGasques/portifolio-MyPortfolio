import React from 'react';

import { HeaderContainer, Container } from './styles'
import Menu from '../NavBar/Menu'
import Banner from './Banner/Banner'

const Header = () => {
  return (
    <>
    <HeaderContainer>
    <Container>
    <div className='title'>
      My Portfolio
   </div>
   <div>
      <Menu/>
       </div>
       </Container>
    </HeaderContainer>
    
</>
  )
}

export default Header
