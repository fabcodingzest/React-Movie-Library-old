import React, { useEffect } from "react";
import axios from "axios";
import Test from "./js/components/Test";

import "./App.css";

function App() {
  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      console.log(data);
    }
    getData();
  }, []);
  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
