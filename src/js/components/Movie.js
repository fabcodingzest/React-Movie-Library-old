import React from "react";
import styled from "styled-components";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  width: 200px;
  margin-bottom: 6rem;
  margin: 0.5rem;
  padding: 0.5rem;
  color: black;
  background-color: none;
  color: #fff;
  font-family: Roboto, sans-serif;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
    color: black;
    box-shadow: 1px 2px 15px #fff;
    transform: scale(1.1);
  }
`;

const Movie = props => {
  const { movie } = props;
  return (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h4>{movie.original_title}</h4>

      <Rating
        placeholderRating={movie.vote_average / 2}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        readonly
      />
    </Card>
  );
};

export default Movie;
