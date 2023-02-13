import React from 'react';
import { useState } from 'react';
import Eu from '..//..//../assets/image/WhatsApp Image 2023-01-27 at 20.16.04 copy.jpeg'

import './foto.css';
import Linguagens from '../Linguage/Linguagens';

const Foto = () => {

const [ color, setColor ] = useState('black')

   let  style ={
        backgroundColor: color,
        
      }
  return (
    <>
    <div id='style' ><img style={style} src={Eu} width='220px' alt='eu'>
</img>
     
      </div>
    <div className='buttun'>
      <button className='first' onClick={() => setColor('#9facc2')}/> 
    <button className='sec' onClick={() => setColor('#DFA70C')}/> 
    <button  className='terc' onClick={() => setColor('#5282d1')}/>
    
    </div></>
  )
}

export default Foto
