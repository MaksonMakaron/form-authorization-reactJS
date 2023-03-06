import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/">
          <button className="button">Войти</button>
        </Link>
        <Link to="/registration">
          <button className="button">Регистрация</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
