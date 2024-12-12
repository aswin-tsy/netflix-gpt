import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="p-6 ">
        <h1 className="text-white  font-bold text-2xl">{title}</h1>
        <div className="flex mt-4 overflow-x-scroll scroll-thumb-gray">
          <div className="flex gap-3">
            {movies.map((movie) => (
              <MovieCard moviePoster={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
