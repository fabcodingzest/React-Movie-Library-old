import React from "react";
import MovieList from "./js/components/MovieList";
import SearchForm from "./js/components/SearchForm";

import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <SearchForm />
      <Switch>
        <Route exact path="/" render={() => <MovieList />} />
        <Route exact path="/search/:query" render={() => <MovieList />} />
      </Switch>
    </div>
  );
}
export default App;
