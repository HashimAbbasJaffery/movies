import Categories from "./Categories";
import Movies from "./Movies";

export default function MoviesSection({ q, onClick, movieGenre }) {
    return (
        <div className="movies-section">
            <Categories onClick={onClick} genre={movieGenre}/>
            <Movies keyword={q} genre={movieGenre} />
        </div>
    )
}