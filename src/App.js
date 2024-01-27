import './App.css';
import {getMovieList ,searchMovie} from "./api"
import { useEffect, useState } from 'react';

const App = function () {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results)
    })
  },[])

  const PopularMovieList = function (){
    return popularMovies.map((movie, i) => {
      return(
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img className='movie-image' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const handleSearch = async function (q) {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron">
       <h1>REX MOVIE SEARCH</h1>
        <input type="text"
        className='movie-search'
        placeholder='cari film kesayangan'
        onChange={({target}) => {handleSearch(target.value)}}
        />
        </div>
       <div className="movie-container">
        <PopularMovieList/>
       </div>
      </header>
    </div>
  );
}

export default App;
