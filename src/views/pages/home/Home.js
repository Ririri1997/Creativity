import React, { useEffect } from 'react';
import './home.scss';
import Header from '../../containers/header/Header';
import Hero from '../../containers/hero/Hero';
import Marquee from '../../../components/marquee/Marquee';
import Explore from '../../containers/explore/Explore';
import Create from '../../containers/create/Create';
import Ad from '../../containers/ad/Ad';
import Cases from '../../containers/cases/Cases';
import Team from '../../containers/team/Team';
import Contacts from '../../containers/contacts/Contacts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Импортируем ScrollTrigger

const Home = () => {
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger); // Регистрируем ScrollTrigger

  gsap.utils.toArray('.card:not(.case):not(.card-small--reverse)').forEach(card => {
  
    gsap.fromTo(card, {
    y: 100,
    opacity: 0}, 
   {
     opacity: 1, 
     duration: 1, 
     y: 0, // Перемещение элемента вниз на 100 пикселей
     ease: 'power2.out', // Используемая функция времени (easing function),
     scrollTrigger: {
       trigger: card,
       start: 'top 80%', // Триггер запускается, когда карточка находится на 80% от верхней части экрана
     },
   });
  });
  if (window.innerWidth < 1280) {
    gsap.utils.toArray('.case').forEach(card => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          }
        }
      );
    });
  }
}, []);
 return(
  <div className='home'>
  <Header nav={true}/>
  <Hero/>
  <Marquee content={'сделаем это быстро'} className={'marque-right'}/> 
  <Marquee content={'считайте до трёх!'} className={'marque-left'}/> 
  <Explore/>
  <Create/>
  <Ad/>
  <Cases/>
  <Team/>
  <Contacts/>
  

  </div> 
 )
}

export default Home;