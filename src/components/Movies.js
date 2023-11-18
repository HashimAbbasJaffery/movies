import Pagination from "./Pagination";
import movies from "../utils/movies";
import "../pagination-style/react-paginate.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Movies({ keyword, genre, perPage }) {
    let movieCollection = movies;

  // Movie Filtrations

  if (keyword) {
    
    
    movieCollection = movieCollection.filter(movie => {
        movie = movie.name.toLowerCase();
        keyword = keyword.toLowerCase();

        return movie.includes(keyword);
    });
  }
  if (genre && genre !== "View All") {
    movieCollection = movieCollection.filter((movie) => {
      return movie.genre === genre;
    });
  }

  return (
    <div className="movies-list">
      <Pagination itemsPerPage={perPage} movies={movieCollection} styleName="react-paginate" />
    </div>
  );
}
