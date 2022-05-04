import React from 'react';
import { Link } from 'react-router-dom';

import './layout.css';
import logo from '../assets/logo.png';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Link to="/">
        <header as="h1" className="h1">
          <img src={logo} alt="logo" />
          ReactJS básico
        </header>
      </Link>
      {children}
      <hr />
      <p className="pull-right">
        <Link to="/asdasd">
          Janaravena
        </Link>

      </p>
    </div>
  );
};

export default Layout;