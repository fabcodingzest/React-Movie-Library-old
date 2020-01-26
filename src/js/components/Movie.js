import React from "react";

const Movie = props => {
  const { movie } = props;
  return (
    <div >
      <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
      <h4>{movie.original_title}</h4>
      <h3>{movie.vote_average / 2}</h3>
    </div>
  );
};

export default Movie;
