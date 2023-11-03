import { useEffect } from "react";
import { useState } from "react"
export default function Movie({ movie }) {

    const [like, setLike] = useState(false);
    function handleLike(e) {
        e.preventDefault();
        setLike(!like);
    }
    useEffect(() => {
        if(like) {
            addToLikedMovies();
        }
    }, [ like ])
    function addToLikedMovies() {
        let likedMovies = localStorage.getItem("likedMovies");
        if(!likedMovies) {
            localStorage.setItem("likedMovies", JSON.stringify([movie]));
        } else {
            likedMovies = JSON.parse(likedMovies);
            likedMovies.push(movie);
            localStorage.setItem("likedMovies", JSON.stringify(likedMovies))    
        }
        updateQuantity();
    }
    function updateQuantity() {
        const liked = document.querySelector(".liked-qty");
        const movies = localStorage.getItem("likedMovies");
        const likedMovies = movies ? JSON.parse(movies).length : 0;
        liked.textContent = likedMovies;
    }
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
                <div className="buttons">
                    <div className="read-more" style={{ marginBottom: "20px" }}>
                        <a href="#" style={{padding: "10px"}}>Read more</a>
                    </div>
                    <div className="like" style={{ marginBottom: "20px" }}>
                        <a href="#" onClick={handleLike} style={{padding: "10px"}}>{ ( like )? "Dislike" : "Like" }</a>
                    </div>
                </div>
            </div>
        </div>
    )
}