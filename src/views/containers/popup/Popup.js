import React, { useEffect } from 'react';
import './popup.scss';
import Button from '../../../components/button/Button';

const Popup = ({ show, handleClose }) => {
  useEffect(() => {
    // Добавляем класс к body при появлении всплывающего окна
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Убираем слушатель события при размонтировании компонента
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  return (
    <>
      {show && (
        <div>
          <div className='overlay' onClick={handleClose}></div>
          <div className='popup success-modal'>
            <div className='close-button close-icon' onClick={handleClose}>
              <img src='/img/close.svg' alt='button close' />
            </div>
            <div className='popup-content'>
              <img className='popup-content__img' src='/img/thanks.gif' alt='thanks' />
              <p className='title'>Заявка отправлена</p>
              <p>
                В ближайшее время мы с{'\u00A0'}вами свяжемся. А{'\u00A0'}если не{'\u00A0'}хотите ждать — напишите нам в{'\u00A0'}<a href='/' target='_blank'>Телеграмм.</a>
              </p>
              <Button tag={'div'} className={'primary close-button'} onClick={handleClose} text={'Вернуться на сайт'} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
