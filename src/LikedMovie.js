export default function LikedMovie({ name }) {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies"));
    return (
        likedMovies.map(movie => {
            return(
                <div className="movies">
                    <img className="thumbnail" src="https://placehold.co/50x50/png" />
                    <p>{ movie.name.substr(0, 10)} { (movie.name.length >= 11) ? "..." : "" }</p>
                </div>
            )
        })
    )
}