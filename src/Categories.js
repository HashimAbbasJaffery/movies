import categories from "./utils/categories"

export default function Categories({ onClick, genre }) {
    const categoriesList = categories.map(category => {
        return <li><a href="#" className={ (genre === category)? "selected" : "" } onClick={onClick}>{category}</a></li>
    })
    return (
        <div className="categories">
            <ul className="categories-list">
                { categoriesList }
                <li><a href="#" onClick={onClick}>View All</a></li>
            </ul>
        </div>
    )
}