import React , {useState, useEffect} from 'react';


const Series = () => {
const APIURL = 'https://api.themoviedb.org/3/tv/popular?api_key=93d14f69d24f3054096f516c40ee15eb&language=fr'
const URLIMG = 'https://image.tmdb.org/t/p/w500'
const [series, setSeries] = useState([]);

useEffect(() => {
  loadData()
}, [])

const loadData = async () => {
  const res = await fetch(APIURL)
  const data = await res.json()
  setSeries(data.results)
}

const allSeries = series.map((serie => (
  <li className="cards__card" key={serie.id}>
    <img className="cards__card__img"src={`${URLIMG}${serie.poster_path}`} alt="poster du film" />
    <div className="cards__card__desc">
    <h2 className="cards__card__desc__title">{serie.original_name}</h2>
    <span className="cards__card__desc__rate">{serie.vote_average}</span>
    <p className="cards__card__desc__content">{serie.overview}</p>
    </div>
  </li>
)))
  return (
    <div>
      <ul className="cards">
        {allSeries}
      </ul>
    </div>
  );
};

export default Series;