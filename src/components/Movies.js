import Pagination from "./Pagination";
import movies from "../utils/movies";
import "../pagination-style/react-paginate.css";

export default function Movies({ keyword, genre }) {
    let movieCollection = movies;

  // Movie Filtrations

  if (keyword) {
    
    movieCollection = movieCollection.filter(movie => {
        return movie.name.includes(keyword);
    });
  }
  if (genre && genre !== "View All") {
    movieCollection = movieCollection.filter((movie) => {
      return movie.genre === genre;
    });
  }

  return (
    <div className="movies-list">
      <Pagination itemsPerPage={6} movies={movieCollection} styleName="react-paginate" />
    </div>
  );
}
