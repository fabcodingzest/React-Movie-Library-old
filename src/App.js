import React from "react";
import MovieList from "./js/components/MovieList";
import SearchForm from "./js/components/SearchForm";
import "./App.css";

function App() {
  return (
    <div>
      <SearchForm />
      <MovieList />
    </div>
  );
}

export default App;
