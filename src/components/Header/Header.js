import React from 'react';

import { HeaderContainer, Container } from './styles'
import Menu from '../Menu/Menu'
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
    <Banner/>
</>
  )
}

export default Header
