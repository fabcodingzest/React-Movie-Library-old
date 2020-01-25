import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { movies: state.movies };
};

const MovieList = ({ movies }) => (
  <ul>
    Jirjgff
    {/* {movies.map(el => (
      <li key={el.original_title}>{el.original_title}</li>
    ))} */}
  </ul>
);

const Test = connect(mapStateToProps, null)(MovieList);

export default Test;
