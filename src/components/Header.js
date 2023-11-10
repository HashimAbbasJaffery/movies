
export default function Header({ logo, qty, onClick, onFilter, q, isFocus }) {
    let quantity = localStorage.getItem("likedMovies") ? JSON.parse(localStorage.getItem("likedMovies")).length : 0;
    return (
        <>
            <div class="top-bar">
                <div id="logo">
                    <h1>{ logo }</h1>
                </div>
                <div id="cart">
                    <a href="#" onClick={onClick}>Likes - <span className="liked-qty">{ quantity }</span> movie(s)</a>
                </div>
            </div>
            <div id="search-bar">
                <input type="text" id="q" value={q} onChange={onFilter} placeholder="Search movies..." autoFocus={isFocus}/>
            </div>
        </>
    )
}