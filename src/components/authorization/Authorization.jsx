import React from 'react';
import style from './Authorization.module.css';
import FormPhone from './formPhone/FormPhone';
import FormLogin from './formLogin/FormLogin';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeAuth: false,
    };
    this.selectAuthSMS = this.selectAuthSMS.bind(this);
    this.selectAuthPassword = this.selectAuthPassword.bind(this);
  }

  render() {
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
        {this.state.typeAuth ? <FormLogin /> : <FormPhone />}
      </div>
    );
  }

  selectAuthSMS() {
    this.setState({ typeAuth: false });
  }

  selectAuthPassword() {
    this.setState({ typeAuth: true });
  }
}

export default Authorization;
