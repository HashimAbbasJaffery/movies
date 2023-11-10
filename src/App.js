import ReactDOM from "react-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import LikedMovies from "./components/LikedMovies";
import MoviesSection from "./components/MoviesSection";








function App() {
  
  let [visibility, setVisibility] = useState(false);
  let [keyword, setKeyword] = useState("");
  let [focus, setFocus] = useState(false);
  let [genre, setGenre] = useState("");


  const root = ReactDOM.createRoot(document.getElementById("root"));
  let
   classes = "";

  function handleVisibility() {
    setVisibility( ! visibility );
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

  if(!visibility) {
    classes = "hidden"
  } 
  root.render(
    <div className="container">
      <Header isFocus={focus} onFilter={handleSearch} q={keyword} onClick={handleVisibility} logo="Movies" qty="1"/>
      <LikedMovies visibility={classes}/>
      <MoviesSection q={keyword} movieGenre={genre} onClick={handleGenreSearch}/>
    </div>
  )
}

export default App;





