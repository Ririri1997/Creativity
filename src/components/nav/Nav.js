import React, { useContext } from 'react';
import './nav.scss';
import { CreativityContext } from '../../context/CreativityContext';
import ScrollToElement from '../../utils/ScrollToElement';


const Nav = () => {
  const { state } = useContext(CreativityContext);

  return (
    <ul className='nav'>
      {Object.keys(state.navLinks).map((item, i) => {
        return (
          <li className='nav-item' key={item}>
            {/* Используем компонент ScrollToElement для прокрутки */}
            <ScrollToElement targetId={state.navLinks[item].link.slice(1)}>
             {state.navLinks[item].text}
            </ScrollToElement>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;