
import React from 'react'
import './cardsWrapper.scss'

const CardsWrapper = ({className, children}) => {

 const fullClass = className ?  `cards-wrapper ${className}` : `cards-wrapper`
 return(
  <div className={fullClass}>
   {children}
  </div>
 )
}

export default CardsWrapper