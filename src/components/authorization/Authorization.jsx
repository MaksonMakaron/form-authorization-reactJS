import React from 'react';
import style from './Authorization.module.css';
import InputMask from 'react-input-mask';
import Error from '../formError/Error';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuePhone: '',
      textError: '',
      error: false,
      typeAuth: false,
    };

    this.submitSMS = this.submitSMS.bind(this);
    this.handlePhoneValue = this.handlePhoneValue.bind(this);
    this.selectAuthSMS = this.selectAuthSMS.bind(this);
    this.selectAuthPassword = this.selectAuthPassword.bind(this);
  }

  render() {
    let formAuth;
    if (this.state.typeAuth === false) {
      formAuth = (
        <form onSubmit={this.submitSMS}>
          <label htmlFor="phone" className={style.label}>
            Введите номер телефона
          </label>
          <InputMask id="phone" className={this.state.error ? style.inputError : style.input} onChange={(e) => this.handlePhoneValue(e)} placeholder="+7 000 000 00 00" mask={'+7\\ 999 999 99 99'} />
          <Error formError={this.state.textError} />
          <button className="button">Отправить SMS</button>
        </form>
      );
    } else {
      formAuth = (
        <form onSubmit={this.submitSMS}>
          <label htmlFor="phone" className={style.label}>
            Введите номер телефона
          </label>
          <InputMask id="phone" className={this.state.error ? style.inputError : style.input} onChange={(e) => this.handlePhoneValue(e)} placeholder="+7 000 000 00 00" mask={'+7\\ 999 999 99 99'} />
          <Error formError={this.state.textError} />
          <button className="button">Войти</button>
        </form>
      );
    }

    return (
      <div className={style.content}>
        <h3 className={style.heading}>Вход в личный кабинет</h3>
        <div className={style.nav}>
          <button className={!this.state.typeAuth ? 'buttonActive' : 'button'} onClick={this.selectAuthSMS}>
            По SMS
          </button>
          <button className={this.state.typeAuth ? 'buttonActive' : 'button'} onClick={this.selectAuthPassword}>
            С постоянным паролем
          </button>
        </div>
        {formAuth}
      </div>
    );
  }

  handlePhoneValue(e) {
    this.setState({ valuePhone: e.target.value });
    console.log(this.state.valuePhone);
    this.setState({ textError: '' });
    this.setState({ error: false });
  }

  selectAuthSMS() {
    this.setState({ typeAuth: false });
  }

  selectAuthPassword() {
    this.setState({ typeAuth: true });
  }

  submitSMS(e) {
    e.preventDefault();
    const phone = this.state.valuePhone.replaceAll(' ', '').replaceAll('_', '');
    if (phone.length === 12 && phone[2] === '9') {
      alert('Авторизация успешна');
      return;
    }
    this.setState({ textError: 'Неправильный формат номера телефона' });
    this.setState({ error: true });
  }
}

export default Authorization;
