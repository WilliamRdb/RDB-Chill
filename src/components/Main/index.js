import React from 'react';
import Series from './series/series';
import Films from './films/films';

import './style.css';
import Search from './search/search';

const Main = (search) => {
  return (
    <main>
      <div className="main">
        <a href="#header">
        <div className="main__ancre"> ^ </div>
        </a>
      {search.search === ''
        ? 
        <>
        <div className="cat" id="films">
          <h1 className="cat__title"> Films </h1>
          <Films />
        </div>
        <div className="cat" id="series">
        <h1 className="cat__title"> Series </h1>
          <Series />
        </div>
        </>
        :
        <Search value={search.search}/> }
      </div>
    </main>
  );
};

export default Main;