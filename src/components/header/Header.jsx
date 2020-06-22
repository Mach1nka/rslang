import React from 'react';
import MainMenu from '../mainMenu/MainMenu';
import UserMenu from '../userMenu/UserMenu';

import './Header.scss';

const isAuth = true;

function Header() {
  return (
    <div className="header">
      <div className="header__logo" />
      <div className="header__main-menu">
        <MainMenu isAuth={isAuth} />
      </div>
      <div className="header__profile-menu">
        <UserMenu isAuth={isAuth} />
      </div>
    </div>
  );
}

export default Header;
