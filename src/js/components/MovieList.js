import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestMovies } from "../actions/index";

const mapStateToProps = state => {
  return { movies: state.movies };
};

const MovieList = props => {
  useEffect(() => {
    props.requestMovies();
  }, [props]);

  return (
    <ul>
      Blah
      {props.movies.map(el => (
        <li key={el.original_title}>{el.original_title}</li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, { requestMovies })(MovieList);
