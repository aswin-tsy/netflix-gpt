import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowShowingMovies } from '../utils/movieSlice';

const useNowShowingMovies = () => {

    
  const dispatch = useDispatch();
    const getNowShowingMovies = async () => {

        const data  = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    
        const json  = await data.json();
    
        //console.log(json.results);
        dispatch(addNowShowingMovies(json.results));
          
      }

      useEffect(() => {
        getNowShowingMovies();
      },[]);
};

export default useNowShowingMovies;