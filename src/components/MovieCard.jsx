import React from 'react'

const MovieCard = ({moviePoster}) => {
  return (
    <div className='w-44 h-[200px] rounded' >
      <img className='h-[200px] w-44  rounded'  src={`https://image.tmdb.org/t/p/w500/${moviePoster}.jpg`} alt="poster" />
    </div>
  )
}

export default MovieCard
