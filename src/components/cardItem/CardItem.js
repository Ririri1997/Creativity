import React from 'react'
import './cardItem.scss'
import Tag from '../tag/Tag'


const CardItem = ({title, text, tags}) => {

 return(
  <div className='card-item'>
   <h3>{title}</h3>
   <p>{text}</p>

   <div className='card-tags'>
    {tags.map((tag, index) => (
     <Tag key={index} text={tag} />
    ))}
   </div>
  </div>
 )
}

export default CardItem