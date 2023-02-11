import React from 'react'
import { FaGithub,FaReact ,  } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import {  SiTypescript,SiMysql} from "react-icons/si";
import { IoLogoJavascript} from "react-icons/io5";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import './Linguagem.css';



const Linguagens = () => {
  return (
    <div className='list'>
      <AiOutlineHtml5 className='icon' size={90} /> <TiCss3 className='icon' size={92}/><IoLogoJavascript className='icon' size={100}/><FaReact className='icon' size={100}/><SiTypescript className='icon' size={100}/><FaGithub className='icon' size={100}/><BsBootstrap className='icon' size={100}/><SiMysql className='icon' size={120}/>
    </div>
  )
}

export default Linguagens
