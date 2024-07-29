import React from 'react'
import './hero.scss'


const Hero = () => {
 return(
  <section className='hero'>
  <h1>Cоздадим сайт и настроим рекламу</h1>
  <video className='hero-video' src='/img/creativiti-promo.mp4' autoPlay loop muted playsInline></video>
  </section> 
 )
}

export default Hero