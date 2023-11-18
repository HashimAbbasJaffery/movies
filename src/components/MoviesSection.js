import Categories from "./Categories";
import Movies from "./Movies";

export default function MoviesSection({ q, onClick, movieGenre, perPage, setPerpage }) {
    return (
        <div className="movies-section">
            <Categories onClick={onClick} genre={movieGenre}/>
            <Movies perPage={perPage} keyword={q} genre={movieGenre} />
        </div>
    )
}