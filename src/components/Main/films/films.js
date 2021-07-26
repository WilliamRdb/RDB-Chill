import React, {useState, useEffect} from 'react';

const Films = () => {
  const URLIMG = 'https://image.tmdb.org/t/p/w500'
  const URLAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=93d14f69d24f3054096f516c40ee15eb&language=fr'
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    loadData()
  }, []);

  const loadData = async () => {
    const res = await fetch(URLAPI)
    const data = await res.json()
    setFilms(data.results)
  };
  

  const allFilm = films.map((film => (
    <li className="cards__card" key={film.id}>
      <img className="cards__card__img"src={`${URLIMG}${film.poster_path}`} alt="poster du film" />
      <div className="cards__card__desc">
      <h2 className="cards__card__desc__title">{film.original_title}</h2>
      <span className="cards__card__desc__rate">{film.vote_average}</span>
      <p className="cards__card__desc__content">{film.overview}</p>
      </div>
    </li>
  )))
  return (
    <>
        <ul className="cards">
          {allFilm}
        </ul>
    </>
  );
};

export default Films;