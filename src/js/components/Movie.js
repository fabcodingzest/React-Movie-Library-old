import React from "react";
import styled from "styled-components";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, far);

const StarsWrapper = styled(Rating)`
  line-height: 1;
`;

const Card = styled.div`
  width: 20vw;
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
      <StarsWrapper
        fractions={10}
        emptySymbol={<FontAwesomeIcon icon={["far", "star"]} size="sm" />}
        fullSymbol={<FontAwesomeIcon icon={["fas", "star"]} size="sm" />}
        placeholderSymbol={<FontAwesomeIcon icon={["fas", "star"]} size="sm" />}
        quiet={true}
        placeholderRating={movie.vote_average / 2}
        readonly
      />
    </Card>
  );
};

export default Movie;
