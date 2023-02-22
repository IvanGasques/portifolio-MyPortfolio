import React from 'react';

import { HeaderContainer, Container } from './styles'
import Menu from '../NavBar/Menu'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <HeaderContainer>
    <Container>
    <div className='title'><Link className='deco' to="/"> My Portfolio</Link>
     
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
