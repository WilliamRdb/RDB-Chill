import React, {useState} from 'react';
import './style.css';

const Header = ({parentCallback}) => {
  const [value, setValue] = useState('')
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    value.replace(/ /g,'%20')
    parentCallback(value)
    setValue('')
  }
  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="header">
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
      <div className="header__logo">
          RDB'Chill
      </div>
      <div className="header__search">
        <form action="submit" onSubmit={handleOnSubmit}>
          <input 
            value= {value}
            onChange= {handleOnChange}
            type='text'
            className="header__search__item"
            placeholder="Films, Séries..."
          />
        </form>
      </div>
    </div>
  );
};

export default Header;