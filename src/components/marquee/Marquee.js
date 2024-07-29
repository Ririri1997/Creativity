import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './marquee.scss';

const Marquee = ({ content, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollDelta = event.deltaY;
      const distance = 100;

      let movementDirection;
      if (scrollDelta > 0) {
        movementDirection = className === 'marque-right' ? 1 : -1;
      } else if (scrollDelta < 0) {
        movementDirection = className === 'marque-right' ? -1 : 1;
      } else {
        // Default direction if className is not specified or incorrect
        movementDirection = 1;
      }

      TweenMax.to(wrapperRef.current, 0.5, {
        x: `+=${movementDirection * distance}`,
        ease: Power3.easeInOut,
      });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [className]);

  // Создание нескольких элементов marque-item
  const items = Array.from({ length: 200 }, (_, index) => (
    <div key={index} className="marque-item">
      <p className='title'>{content}</p>
      <div className='marque-dots'></div>
    </div>
  ));

  return (
    <div className="marque">
      <div className={`marque-wrapper ${className}`} ref={wrapperRef}>
        {items}
      </div>
    </div>
  );
};

export default Marquee;