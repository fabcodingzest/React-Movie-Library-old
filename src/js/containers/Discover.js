import React, { useEffect } from "react";
import { requestMovies } from "../actions/index";
import MovieList from "../components/MovieList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const Discover = props => {
  const { requestMovies, movies } = props;
  useEffect(() => {
    requestMovies();
  }, [requestMovies]);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
export default connect(mapStateToProps, { requestMovies })(Discover);
