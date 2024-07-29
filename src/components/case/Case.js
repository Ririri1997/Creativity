import React from 'react'
import './case.scss'

const Case = ({title, task, solution, result, img}) => {
 return(
  <div className='case card'>
  <div className='case-info'>
   <p className='title'>{title}</p>
   <span className='bold'>Задача</span>
   <p>{task}</p>
   <span className='bold'>Решение </span>
   <ul>
   {
   Object.keys(solution).map((item, i) =>{
     return(
       <li key={item}>
        <p>{solution[i]}</p>
       </li>
     )
   })
  }
   </ul>
   <span className='bold'>Результат</span>
   <p>{result}</p>
  </div>
   
  <div className='case-image'>
   <img src={img} alt={`Картинка «${title}»`}/>
  
  </div>
  </div>
 )
}

export default Case