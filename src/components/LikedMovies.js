import LikedMovie from "./LikedMovie";

export default function LikedMovies({ visibility }) {
    const LikedMovies = JSON.parse(localStorage.getItem("likedMovies"));
    console.log({LikedMovies})
    const movies = LikedMovies?.map(movie => {
        return <LikedMovie name={movie.name} />
    }) 
    return (
        <div className={visibility + " liked-movies"}>
            {movies}
        </div>
    )
}