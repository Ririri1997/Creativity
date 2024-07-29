import React from 'react'
import './explore.scss'
import CardLarge from '../../../components/cardLarge/CardLarge'
import CardItem from '../../../components/cardItem/CardItem'

const Explore = () => {
 return(
  <section className='explore'>
   <h2>1. Исследуем</h2>
   <CardLarge 
    video={'./img/research.mp4'}>
       
 
   
    <div className='card-large__content'>
      <CardItem 
        title={'Изучаем рынок и конкурентов'}
        text={'Поможем запуститься начинающему бизнесу, а действующему развиваться и быть конкурентоспособным.'}
        tags={['аналитика ниши', 'конкурентный анализ', 'юнит-экономика']}></CardItem>

    
      <CardItem 
        title={'Выясняем потребности ЦА'}
        text={'Узнаем мотивы / проблемы на пути ваших клиентов и сформируем удобную модель продаж.'}
        tags={['JTBD-интервью', 'опросы', 'фокус группы']}></CardItem>

      <CardItem 
        title={'Находим точки роста'}
        text={'Найдём проблемы в интерфейсе, протестируем гипотезы и улучшим метрики вашего продукта.'}
        tags={[ 'CJM', 'юзабилити-тесты', 'АБ-тесты']}></CardItem>
    </div>
   </CardLarge>
  </section>
 )
}

export default Explore