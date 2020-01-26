import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestMovies } from "../actions/index";
import Movie from "./Movie";

const mapStateToProps = state => {
  return { movies: state.movies };
};

const MovieList = props => {
  useEffect(() => {
    props.requestMovies();
  }, [props]);

  return (
    <div>
      {props.movies.map(movie => (
        <Movie key={movie.original_title} movie={movie} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, { requestMovies })(MovieList);
