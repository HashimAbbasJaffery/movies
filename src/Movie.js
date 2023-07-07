export default function Movie({ movie }) {
    return (
        <div className="single-movie" key={movie.key}>
            <div className="movie-thumbnail">
                <img src="https://placehold.co/230x150" width="100%"/>
            </div>
            <div className="movie-details">
                <div className="movie-title">
                    <h1>{ movie.name }</h1>
                </div>
                <div className="movie-description">
                    <p>
                        { movie.description.substr(0, 189) }{ (movie.description.length > 90) ? "..." : "" }
                    </p>
                </div>
                <div className="read-more" style={{ marginBottom: "20px" }}>
                    <a href="#" style={{padding: "10px"}}>Read more</a>
                </div>
            </div>
        </div>
    )
}