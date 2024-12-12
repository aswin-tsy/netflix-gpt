import React from 'react';
import MovieHeader from './MovieHeader';
import VideoTrailer from './VideoTrailer';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowShowingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
   
    //console.log(mainMovie);

  return (
    <div className=''>
        <MovieHeader title={mainMovie.original_title} overview={mainMovie.overview} />
        <VideoTrailer movieID= {mainMovie.id}/>
      
    </div>
  )
}

export default MainContainer;
