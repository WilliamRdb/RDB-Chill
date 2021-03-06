import React, {useState} from 'react';
import './style.css';
import Nav from './Nav.js'
import Logo from './Logo.js'
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
    <header>
      <div className="header" id="header">
        <Nav/>
        <Logo />
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
    </header>
  );
};

export default Header;