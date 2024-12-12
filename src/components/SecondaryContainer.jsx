import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowShowingMovies);
  if (!movies) return;

  return (
    <div className="bg-black ">
      <div className="-mt-72 relative z-99">
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Now Playing Movies"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
