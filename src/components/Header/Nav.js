import React from 'react';

const Nav = () => {
  return (
    <>
      <div className="header__nav">
        <ul className="header__nav__list">
          <a href="#films">
          <li 
            className="header__nav__list__item"
          >
            Films
          </li>
          </a>
          <a href="#series">
          <li
            className="header__nav__list__item"
          >
            Séries
          </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Nav;