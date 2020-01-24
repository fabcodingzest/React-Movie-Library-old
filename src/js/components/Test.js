import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state.movies);
  return { movies: state.movies };
};

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(el => (
      <li key={el.original_title}>{el.original_title}</li>
    ))}
  </ul>
);

const Test = connect(mapStateToProps)(MovieList);

export default Test;
