import React  from 'react'
import './AboutMe.css';
import Linguagens from './Linguage/Linguagens';
import { Link } from 'react-router-dom';


const AboutMe = () => {

  return (<div className='me'>
    <div className='about'>
    
      <h1> About Me</h1>
      <p className='content'>Im  Frontend Developer with a strong passion for technology and web application development, I possess a solid understanding of JavaScript, HTML, CSS, and familiarity with the React framework. With strong skills in quick learning and problem-solving, I am constantly seeking opportunities to enhance my skills and expand my knowledge. I work in a proactive and collaborative manner, always seeking to understand user needs and deliver efficient solutions. My focus is on developing engaging and user-friendly interfaces that enhance the overall user experience.</p>
    <p><button><Link to="/aboutme">See more</Link> </button></p>
    </div>
    
    <Linguagens /></div>
  )
}

export default AboutMe
