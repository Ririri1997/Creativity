import React from 'react';
import './create.scss';
import CardsWrapper from '../../../components/cardsWrapper/CardsWrapper';
import CardSmall from '../../../components/cardSmall/CardSmall';

const Create = () => {
   

  return (
    <section className='create' id="services">
      <h2>2. Создаём сайт</h2>
      <CardsWrapper className={'cards-wrapper-three'}>
        <CardSmall 
          title={'Одностраничный'}
          text={'Эффективное решение для инфобизнеса, а также для тестирования ниши или продукта.'}
          img={'./img/landing.webp'}
          alt={'Пример одностраничного сайта'}
        />
        <CardSmall 
          title={'Корпоративный'}
          text={'Для малого бизнеса и крупных компаний, когда нужно дать максимум информации о вашей работе.'}
          img={'./img/corp-website.webp'}
          alt={'Пример корпоративного сайта'}
        />
        <CardSmall 
          title={'Интернет-магазин'}
          text={'Независимость от других площадок. Для развития собственного бренда и сервиса.'}
          img={'./img/shop.webp'}
          alt={'Пример интернет магазина'}
        />
      </CardsWrapper>
    </section>
  );
};

export default Create;
