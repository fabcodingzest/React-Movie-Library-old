import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestMovies } from "../actions/index";
import Movie from "./Movie";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  /* width: 100vw; */
  text-align: center;
  padding: 2rem;
`;

const mapStateToProps = state => {
  return { movies: state.movies };
};
const MovieList = props => {
  const { requestMovies, movies } = props;
  useEffect(() => {
    requestMovies();
  }, [requestMovies]);
  return (
    <div>
      <Wrapper>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Wrapper>
    </div>
  );
};

export default connect(mapStateToProps, { requestMovies })(MovieList);
