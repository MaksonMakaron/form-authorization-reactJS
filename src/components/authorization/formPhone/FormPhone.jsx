import React, { useState } from 'react';
import style from './../Authorization.module.css';
import InputMask from 'react-input-mask';
import Error from './../../formError/Error';

const FormPhone = () => {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const submitSMS = (e) => {
    e.preventDefault();
    if (phone.length === 12 && phone[2] === '9') {
      alert('Авторизация успешна');
      return;
    }
    setErrorMessage('Неправильный формат номера телефона');
    setError(true);
  };

  const onChanePhone = (e) => {
    setPhone(e.target.value);
    setError(false);
    setErrorMessage('');
  };

  return (
    <form onSubmit={submitSMS}>
      <label htmlFor="phone" className={style.label}>
        Введите номер телефона
      </label>
      <InputMask id="phone" className={error ? style.inputError : style.input} onChange={(e) => onChanePhone(e)} placeholder="+7 000 000 00 00" mask={'+7\\ 999 999 99 99'} />
      <Error formError={errorMessage} style={{ marginBottom: 70 }} />
      <button className="button">Отправить SMS</button>
    </form>
  );
};

export default FormPhone;
