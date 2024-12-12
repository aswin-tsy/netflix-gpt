import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/movieSlice";

const useVideoTrailer = (movieID) =>{

    const dispatch = useDispatch();

    const fetchMovieTrailer = async () =>{

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_OPTIONS);

        const json = await data.json();
        
        const trailers =  json.results.filter(video => video.type ==="Trailer");
       // console.log(trailers);
     
        dispatch(addVideoTrailer(trailers.length !== 0 ? trailers[0] :  json.results[0]));
    }

    useEffect(() => {
        fetchMovieTrailer();
    },[])
}

export default useVideoTrailer;