export default function Pagination({ pages }) {
    let pagesList = []
    for(let i = 0; i < pages; i++) {
        pagesList.push(<li>{i + 1}</li>)
    }
    console.log(pagesList);
    return (
        <div>
            <ul>
                {pagesList}
            </ul>
        </div>
    )
}