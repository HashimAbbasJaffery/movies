import LikedMovie from "./LikedMovie";

export default function LikedMovies({ visibility }) {
  const LikedMovies = JSON.parse(localStorage.getItem("likedMovies"));
  let movies = LikedMovies?.map((movie) => {
    return <LikedMovie movie={movie} />;
  });
  if(!movies.length) {
    movies = "No Liked Movies found!";
  }

  const dropdownStyling = {
    position: "absolute",
    background: "white",
    width: "150%",
    right: "0px",
    marginTop: "10px",
    border: "1px solid black",
  };
  let classes = "";
  if (!visibility) {
    classes = "hidden";
  }
  return (
    <>
      <div className={classes + " liked-movies cart-dropdown"} style={dropdownStyling}>
        <div
          className="liked-movie"
          style={{ padding: "10px" }}
        >
          {movies}
        </div>
      </div>
    </>
  );
}
