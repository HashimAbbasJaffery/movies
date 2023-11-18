import ReactDOM from "react-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import LikedMovies from "./components/LikedMovies";
import MoviesSection from "./components/MoviesSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleMovie from "./components/singleMovie";

function App() {
  let [visibility, setVisibility] = useState(false);
  let [keyword, setKeyword] = useState("");
  let [focus, setFocus] = useState(false);
  let [genre, setGenre] = useState("");
  let [perPage, setPerpage] = useState(6);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MoviesSection
          perPage={perPage}
          q={keyword}
          movieGenre={genre}
          onClick={handleGenreSearch}
        />
      ),
    },
    {
      path: "movie/:movieName",
      element: <SingleMovie></SingleMovie>
    }
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  let classes = "";

  function handleVisibility() {
    setVisibility(!visibility);
  }
  function handleSearch(e) {
    const keyword = e.target.value;
    setKeyword(keyword);
    setFocus(true);
  }

  function handleGenreSearch(e) {
    const genre = e.target.textContent;
    setGenre(genre);
  }

  if (!visibility) {
    classes = "hidden";
  }
  root.render(
    <div className="container">
      <Header
        perPage={perPage}
        setPerpage={setPerpage}
        isFocus={focus}
        onFilter={handleSearch}
        q={keyword}
        onClick={handleVisibility}
        visibility={visibility}
        logo="Movies"
        qty="1"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
