import React from 'react';
import './button.scss';

const Button = ({ tag, href, className, text, onClick }) => {
  const TagName = tag || 'a'; // По умолчанию используется тег 'a'

  return (
    <TagName href={href} className={`button ${className}`} onClick={onClick}>
      {text}
    </TagName>
  );
};

export default Button;