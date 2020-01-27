import React from "react";
import { Card } from "react-bootstrap";

const Movie = props => {
  const { movie } = props;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
