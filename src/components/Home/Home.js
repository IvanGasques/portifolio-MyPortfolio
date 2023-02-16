import React from 'react'

import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'
import Foto from '../AboutMe/Myphoto/Foto'
import Banner from '../Header/Banner/Banner'
import Carousel from './Carousel'
import BgColorExample from '../AllMe/Experience'

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
