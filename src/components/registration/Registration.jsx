import React, { useContext } from 'react';
import Input from './Input';
import ChangePage from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';

const Registration = () => {
  const { setPage, funcFormRegistration } = useContext(ChangePage);

  return (
    <form
      className="reg__form"
      onSubmit={(event) => {
        const email = document.querySelector('.reg__input_email');
        const firstPassword = document.querySelector('.reg__input_password_first');
        const secondPassword = document.querySelector('.reg__input_password_second');
        if (firstPassword.value === secondPassword.value) {
          funcFormRegistration(event, { email: email.value, password: firstPassword.value }, 'registration');
        } else {
          event.preventDefault();
        }
      }}
    >
      <h1 className="reg__h1">Создать аккаунт</h1>
      {REGISTRATION.map((element) => (
        <Input
          key={`${element.name}-${element.id}`}
          name={element.name}
          type={element.type}
          placeholder={element.placeholder}
          icon={element.icon}
        />
      ))}
      <div className="reg__wrapper_first">
        <button
          type="submit"
          className="reg__button_first"
        >
          Присоединиться
        </button>
      </div>
      <div className="reg__wrapper_second">
        <p>Уже с нами?</p>
        <button
          type="submit"
          className="reg__button_second"
          onClick={(e) => {
            e.preventDefault();
            setPage('signIn');
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default Registration;
