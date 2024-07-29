import React, { useRef, useState } from 'react';
import './contacts.scss';
import CardsWrapper from '../../../components/cardsWrapper/CardsWrapper';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import Button from '../../../components/button/Button';
import Popup from '../../containers/popup/Popup';
import { NavLink } from 'react-router-dom';

const Contacts = () => {
  const nameRef = useRef(null);
  const telRef = useRef(null);
  const messageRef = useRef(null);
  const [nameError, setNameError] = useState('');
  const [telError, setTelError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `6734535239:AAG9grz8bKs5GEau_187sR5QEaVNE3b4TgM`;
    const chatId = '-1001997275203';
    const uriApiMess = `https://api.telegram.org/bot${token}/sendMessage`;

    setNameError('');
    setTelError('');

    if (!telRef.current) {
      return;
    }

    if (nameRef.current.value.trim().length <= 1) {
      setNameError('Введите имя');
      return;
    }

    const telValue = telRef.current.state.formattedNumber;
    if (telValue.length < 18) {
      setTelError('Введите номер телефона');
      return;
    }

    let message = `<b>Заявка с сайта</b>\n\n`;
    message += `Имя: ${nameRef.current.value}\n`;
    message += `Номер: ${telRef.current.state.formattedNumber}\n`;
    if (messageRef.current.value.trim().length > 0) {
      message += `Сообщение: ${messageRef.current.value}\n`;
    }

    axios
      .post(uriApiMess, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message,
      })
      .then((res) => {
        nameRef.current.value = '';
        telRef.current.setState({ formattedNumber: '+7' }); 
        messageRef.current.value = '';
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameChange = () => {
    if (nameRef.current.value.trim().length > 1) {
      setNameError('');
    }
  };

  const handleTelChange = () => {
    const telValue = telRef.current && telRef.current ? telRef.current.value : '';
    if (telValue && telValue.length >= 11) {
      setTelError('');
    }
  };

  return (
    <section className='contacts' id='form'>
      <CardsWrapper className={'cards-wrapper-two'}>
        <div className='contacts-card card'>
          <h2>Поработаем над{'\u00A0'}вашей задачей?</h2>
        </div>
        <div className='contacts-card card'>
          <form className='contacts-form' onSubmit={handleSubmit}>
            <p>
              Оставьте заявку и мы свяжемся с вами. <br />Или вы можете написать нам в{' '}
              <a href='/' target='_blank'>
                Телеграмм
              </a>
              .
            </p>
            <div className='input-group'>
              <div className='input-name'>
                <input
                  type='text'
                  placeholder='Имя'
                  ref={nameRef}
                  style={{ borderColor: nameError ? 'red' : '' }}
                  onChange={handleNameChange}
                />
                {nameError && <span className='tooltip-name'>{nameError}</span>}
              </div>
              <div className='input-tel'>
                <PhoneInput
                  country={'ru'}
                  onlyCountries={['ru']}
                  ref={telRef}
                  inputStyle={{ borderColor: telError ? 'red' : '' }}
                  onChange={handleTelChange}
                  placeholder={'+7 (999) 999 99 99'}
                />
                {telError && <span className='tooltip-tel'>{telError}</span>}
              </div>
            </div>
            <textarea rows='5' cols='10' ref={messageRef} placeholder='Опишите задачу'></textarea>
            <Button tag={'button'} className={'secondary'} text={'Отправить'} />
            <p className='caption'>
              Нажимая кнопку «Отправить», я принимаю условия{'\u00A0'}<NavLink to='/policy'>пользовательского соглашения
              </NavLink>
            </p>
          </form>
        </div>
      </CardsWrapper>
      <Popup show={showModal} handleClose={handleModalClose} /> {}
    </section>
  );
};
export default Contacts;