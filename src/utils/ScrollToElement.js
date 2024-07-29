import React from 'react';

const ScrollToElement = ({ targetId, children }) => {
  const handleScrollToElement = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -100; 
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleScrollToElement}>
     {children}
    </a>
  );
};

export default ScrollToElement;
