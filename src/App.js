import React from "react";
import MovieList from "./js/components/MovieList";
import SearchForm from "./js/components/SearchForm";
import { Provider } from "react-redux";
import store from "./js/store/index";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchForm />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
