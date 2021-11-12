import React,{useState} from 'react';
const Search = (parentCallback) => {
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
    <>
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
    </>
  );
};

export default Search;