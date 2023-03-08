import React, { useState } from 'react';
import Error from '../../formError/Error';
import style from './../Authorization.module.css';
const user = { phone: '89000000000', email: 'email@email.ru', password: '12345' };

const FormLogin = (props) => {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    setErrorLogin(false);
    setErrorMessageLogin('');
    setErrorPassword(false);
    setErrorMessagePassword('');

    if (login === '') {
      setErrorMessageLogin('Введите логин');
      setErrorLogin(true);
    }
    if (password === '') {
      setErrorMessagePassword('Введите пароль');
      setErrorPassword(true);
    }

    if (login !== '' && password !== '') {
      if (EMAIL_REGEXP.test(login)) {
        if (login === user.email && password === user.password) {
          alert('Авторизация успешна');
        } else {
          setErrorMessagePassword('Неверный логин или пароль');
          setErrorPassword(true);
        }
      } else {
        if (login === user.phone && password === user.password) {
          alert('Авторизация успешна');
        } else {
          setErrorMessagePassword('Неверный логин или пароль');
          setErrorLogin(true);
          setErrorPassword(true);
        }
      }
    }
  };

  const onChaneLogin = (e) => {
    setLogin(e.target.value);
    setErrorLogin(false);
    setErrorMessageLogin('');
  };

  const onChanePassword = (e) => {
    setPassword(e.target.value);
    setErrorPassword(false);
    setErrorMessagePassword('');
  };

  return (
    <form onSubmit={signIn}>
      <label htmlFor="login" className={style.label}>
        Введите логин
      </label>
      <input id="login" maxLength="35" className={errorLogin ? style.inputError : style.input} onChange={(e) => onChaneLogin(e)} placeholder="Логин" />
      <Error formError={errorMessageLogin} />
      <label htmlFor="password" className={style.label}>
        Введите пароль
      </label>
      <input id="password" maxLength="20" type="password" className={errorPassword ? style.inputError : style.input} onChange={(e) => onChanePassword(e)} placeholder="Пароль" />
      <Error formError={errorMessagePassword} />
      <button className="button">Войти</button>
    </form>
  );
};

export default FormLogin;
