import LikedMovies from "./LikedMovies";

export default function Header({ logo, qty, onClick, onFilter, q, isFocus }) {
    return (
        <>
            <div class="top-bar">
                <div id="logo">
                    <h1>{ logo }</h1>
                </div>
                <div id="cart">
                    <a href="#" onClick={onClick}>Likes - { qty } movie(s)</a>
                </div>
            </div>
            <div id="search-bar">
                <input type="text" id="q" value={q} onChange={onFilter} placeholder="Search movies..." autoFocus={isFocus}/>
            </div>
        </>
    )
}