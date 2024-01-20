import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
import Key from './key'

// Dummy key, so posted it on git,
const API_URL = "http://www.omdbapi.com?apikey=44526dd";
const movie1 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Title": "Shrek 2",
  "Type": "movie",
  "Year": "2001",
  "imdbID": "tt0126029"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //const apikey =  "44526dd" 

  const searchMovies = async(title: any) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  }

  useEffect(function(){
    searchMovies({searchValue})
  },[])

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          type="text"
          value={searchValue} 
          onChange={function(e){
            setSearchValue(e.target.value);
          }}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={function(){
            searchMovies(searchValue)
          }}
        />
      </div>

      <div className="container">
        {/* <MovieCard Poster={movie1.Poster} Title={movie1.Title} Type={movie1.Type} Year={movie1.Year}/> */}
        {/* <MovieCard movies={movies.map(movie) => {}}/> */}

        {
          movies.length > 0 
            ? (
              <div className="container">
                {
                  movies.map((eachMovie) => { return <MovieCard movie={eachMovie} /> })
                }
              </div> 
            ):( 
              <div><h2>No Movies Found !</h2></div>
            )
        }

      </div>

    </div>
  )
}

export default App
