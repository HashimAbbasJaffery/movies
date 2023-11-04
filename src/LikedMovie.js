export default function LikedMovie({ name }) {
 
    return (
        <div className="movies">
            <img className="thumbnail" src="https://placehold.co/50x50/png" />
            <p>{ name.substr(0, 10)} { (name.length >= 11) ? "..." : "" }</p>
        </div>    
    )
}