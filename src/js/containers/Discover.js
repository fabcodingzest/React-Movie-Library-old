import React from "react";
import {requestMovies} from '../actions/index'

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const Discover = () => {
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
