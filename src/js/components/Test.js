import React from "react";
import { connect } from "react-redux";
import { requestMovies } from "../actions/index";

const mapStateToProps = state => {
  return { movies: state.movies };
};
const mapDispatchToProps = { requestMovies };

const MovieList = ({ movies }) => (
  <ul>
    Jirjgff
    {movies[1]}
    {/* {movies.map(el => (
      <li key={el.original_title}>{el.original_title}</li>
    ))} */}
  </ul>
);

const Test = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export default Test;
