import LikedMovies from "./LikedMovies";

export default function Header({ visibility, logo, qty, onClick, onFilter, q, isFocus, setPerpage, perPage }) {
    let quantity = localStorage.getItem("likedMovies") ? JSON.parse(localStorage.getItem("likedMovies")).length : 0;
    perPage = parseInt(perPage);
    const changePerpage = e => {
        setPerpage(e.target.value)
    }
    const dropdownStyling = {
        position: "absolute",
        background: "white",
        width: "150%",
        right: "0px",
        marginTop: "10px",
        border: "1px solid black"
    }
    return (
        <>
            <div class="top-bar">
                <div id="logo">
                    <h1>{ logo }</h1>
                </div>
                <div id="cart" style={{position: "relative"}}>
                    <a href="#" onClick={onClick}>Likes - <span className="liked-qty">{ quantity }</span> movie(s)</a>
                    {/* <div className="cart-dropdown" style={dropdownStyling}>
                        <div className="liked-movie" style={{padding: "10px", display: "flex"}}>
                            <div className="thumbnail" style={{background: "lightgrey", width: "50px", height: "50px"}}>&nbsp;</div>
                            <div className="thumbnail-detail">
                                <h3 style={{fontSize: "13px", fontWeight: "bold", marginBottom: "3px"}}>All of us are dead</h3>
                                <p style={{fontSize: "12px"}}>It is the movie</p>
                            </div>
                        </div>
                    </div> */}
                    <LikedMovies visibility={visibility}/>
                </div>
            </div>
            <div id="search-bar" style={{display: "flex", alignItems: "baseline", justifyContent: "space-between"}}>
                <input type="text" style={{width: "96%"}} id="q" value={q} onChange={onFilter} placeholder="Search movies..." autoFocus={isFocus}/>
                <select onChange={changePerpage} style={{ padding: "6px 0px 6px 0px", outline: "none" }}>
                    <option selected={perPage === 6}>6</option>
                    <option selected={perPage === 12}>12</option>
                    <option selected={perPage === 24}>24</option>
                </select>
            </div>
        </>
    )
}