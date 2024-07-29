import React from 'react'
import './header.scss'
import Button from '../../../components/button/Button'
import Nav from '../../../components/nav/Nav'
import ScrollToElement from '../../../utils/ScrollToElement'

const Header = ({nav}) => {
 return(
  <header className='header'>
   <img className='header-logo' src='/img/logo.svg' alt='logo'></img>
   {nav ? <Nav /> : null} 
   <ScrollToElement targetId={'form'}>
    <Button tag='button' className={'primary primary-header'} text={'Связаться с нами'}/>
   </ScrollToElement>
 
  
  </header> 
 )
}

export default Header