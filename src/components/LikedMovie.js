export default function LikedMovie({ movie }) {
    const { name, description } = movie;
    return (
        <>
        <div style={{display: "flex"}}>
        <div className="thumbnail" style={{background: "lightgrey", width: "50px", height: "50px"}}>&nbsp;</div>
        <div className="thumbnail-detail">
            <h3 style={{fontSize: "13px", fontWeight: "bold", marginBottom: "3px"}}>{ name }</h3>
            <p style={{fontSize: "12px"}}>{ description.substr(0, 11)} { (description.length >= 31) ? "..." : "" }</p>
        </div>
        </div>
        </>
        // <div className="movies">
        //     <img className="thumbnail" src="https://placehold.co/50x50/png" />
        //     <p>{ name.substr(0, 10)} { (name.length >= 11) ? "..." : "" }</p>
        // </div>    
    )
}