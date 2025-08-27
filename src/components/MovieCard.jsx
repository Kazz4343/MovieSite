import React from 'react'

function MovieCard  (props)  {
  
  const { movieData  } = props

  
  return (
        <div className='movie-grid'>
          {movieData.map((movie, movieIndex)=>{
            return (
              <div className='movie-card' key={movieIndex}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} 
                alt={'movie?.title'}
                className="movie-poster"/>
                <div className='movie-info'>
                  <p className='move-title'>{movie?.title}</p>
                  <div className='movie-meta'>
                    <p className='movie-vote'>⭐ {movie?.vote_average.toFixed(1)}</p>
                  </div>
                  <div className='dotdot'>
                    <span>• </span>
                    <p> {movie?.original_language}</p>
                    <span> • </span>
                    <p> {movie?.release_date.split('-')[0]}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
    )
}
export default MovieCard
