import React from 'react'
import './App.css'

const MovieCard = (prop: any) => {
  return (
        <div className="movie">
          <div>
            <p>{prop.movie.Year}</p>
          </div>

          <div>
            <img src={prop.movie.Poster} alt={prop.movie.Title}/>
          </div>

          <div>
            <span>{prop.movie.Type}</span>
            <h3>{prop.movie.Title}</h3>
            {/* <h1>{prop.movie.imdbID}</h1> */}
          </div>
        </div>
  )
}

export default MovieCard