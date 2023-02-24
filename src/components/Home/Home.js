import React from 'react'

import AboutMe from '../AboutMe/AboutMe'
import Foto from '../AboutMe/Myphoto/Foto'
import Banner from '../Header/Banner/Banner'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Foto />
      <AboutMe />
      <Carousel/>
      
      
    </div>
  )
}

export default Home
