import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedCards = ({ cards }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardRefs.current.forEach((card, index) => {
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
  }, [cards]);

  return null; // Компонент ничего не отображает, только применяет анимацию
};

export default AnimatedCards;
