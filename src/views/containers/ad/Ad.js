import React from 'react'
import './ad.scss'
import CardsWrapper from '../../../components/cardsWrapper/CardsWrapper'
import CardSmall from '../../../components/cardSmall/CardSmall'

const Ad = () => {
 return(
  <section className='ad'>
   <h2>3. Запускаем рекламу</h2>
   <CardsWrapper className={'cards-wrapper-two'}>
    <CardSmall 
    title={'Оформляем профиль'}
    text={'Заполним карточку компании так, чтобы клиенты обязательно могли вас найти.'}
    img={'./img/profile.webp'}
    alt={'Пример оформления профиля'}
    />
    
    <CardSmall 
    title={'Запускаем рекламу'}
    text={'Подберём тариф с помощью алгоритм Kairos™. Трафик с гарантией объёма по фиксированной стоимости!'}
    img={'./img/target.webp'}
    alt={'Пример рекламы'}
    />
   </CardsWrapper>

  </section>
 )
}

export default Ad