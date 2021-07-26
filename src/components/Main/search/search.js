import React, {useState, useEffect} from 'react';

const Search = (value) => {
  const [dataAPI, setDataAPI] = useState([])
  const SEARCHURL = `https://api.themoviedb.org/3/search/multi?api_key=93d14f69d24f3054096f516c40ee15eb&language=fr&query=${value.value}&include_adult=false`;
  const URLIMG = 'https://image.tmdb.org/t/p/w500'

  useEffect(()=> {
    loadData()
  },);

  const loadData = async () => {
    const res = await fetch(SEARCHURL)
    let data = await res.json()
    data = await data.results
    setDataAPI(data)
  }
  const allSearch = dataAPI.map((search => (
    <li className="cards__card" key={search.id}>
      <img className="cards__card__img"src={`${URLIMG}${search.poster_path}`} alt="poster du film" />
      <div className="cards__card__desc">
      <h2 className="cards__card__desc__title">{search.original_name || search.original_title}</h2>
      <span className="cards__card__desc__rate">{search.vote_average}</span>
      <p className="cards__card__desc__content">{search.overview}</p>
      </div>
    </li>
  )))
  return (
    <div className="cat">
      <h1 className="cat__title"> Recherche : {value.value} </h1>
      <ul className="cards">
        {allSearch}
      </ul>
    </div>
  );
};

export default Search;