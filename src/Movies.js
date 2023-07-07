import Movie from "./Movie";
import movies from "./utils/movies";

export default function Movies({ keyword, genre }) {
    let movieCollection = movies;
    if(keyword) {
        movieCollection = movieCollection.filter(movie => {
            return movie.name.includes(keyword);
        });
    }
    if(genre && genre !== "View All") {
        movieCollection = movieCollection.filter(movie => {
            return movie.genre === genre;
        });
    }

    const moviesList = movieCollection.map(movie => {
        return <Movie movie={movie} />
    });
    return (
        <div className="movies-list">
            { (moviesList.length > 0) ? moviesList : "No movie was found" }
        </div>
    )
}