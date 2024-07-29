import React from 'react'
import './cardLarge.scss'


const CardLarge = ({className, video, children}) => {
 const fullClass = className ? `card-large ${className}` : `card-large card`

 return(
  <div className={fullClass}>
   <div className='card-large__video'>
    <video src={video} loop autoPlay playsInline muted></video>
   </div>
    {children}
  </div>
 )
}

export default CardLarge