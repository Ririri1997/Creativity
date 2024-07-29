import React from 'react';
import CardsWrapper from '../../../components/cardsWrapper/CardsWrapper';
import CardSmall from '../../../components/cardSmall/CardSmall';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './team.scss'

const Team = () => {
  const isMobile = window.innerWidth <= 768;

  const teamMembers = [
    {
      img: './img/stas.webp',
      title: 'Станислав',
      text: 'Продуктовый дизайнер',
      reverse: true
    },
    {
      img: './img/irina.webp',
      title: 'Ирина',
      text: 'Фронтенд-разработчик',
      reverse: true
    },
    {
      img: './img/dima.webp',
      title: 'Дмитрий',
      text: 'Бэкенд-разработчик',
      reverse: true
    },
    {
      img: './img/jenya.webp',
      title: 'Евгений',
      text: 'Маркетолог и менеджер',
      reverse: true
    }
  ];

  const teamMembersJSX = teamMembers.map((member, index) => (
    <CardSmall
      key={index}
      img={member.img}
      title={member.title}
      text={member.text}
      reverse={member.reverse}
    />
  ));

  return (
    <section className='team' id='team'>
      <h2>это мы</h2>
      {isMobile ? (
        <Slider
          className = {"slider variable-width"}
          dots={true}
          arrows={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth = {true}
          centerPadding = {'50px'}
        >
          {teamMembersJSX}
        </Slider>
      ) : (
        <CardsWrapper className={'cards-wrapper-four'}>
          {teamMembersJSX}
        </CardsWrapper>
      )}
    </section>
  );
}

export default Team;