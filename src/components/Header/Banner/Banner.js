import React from 'react'
import { BannerContainer } from './stylesBanner'
import cv from "..//../../assets/image/Cv2023.pdf"

const Banner = () => {
  return (
    <BannerContainer>
    <div>
    <h2>Front-end</h2>
    <h1>Ivan GAsques</h1>
    <p>Lets talk ...</p>

    <p><button type='button'><a href={cv} download> Download CV</a></button></p>
      
    </div>
    </BannerContainer>
  )
}

export default Banner
