import React from 'react'

import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'
import Foto from '../AboutMe/Myphoto/Foto'
import Banner from '../Header/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutMe />
      <Foto />
      <Projects />
      
    </div>
  )
}

export default Home
