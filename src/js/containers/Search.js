import React from "react";
import { searchRequest } from "../actions/index";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const Search = () => {
  const { searchRequest, movies } = props;
  useEffect(() => {
    searchRequest();
  }, [requestMovies]);
  return <div></div>;
};
export default connect(mapStateToProps, { requestMovies })(Search);
