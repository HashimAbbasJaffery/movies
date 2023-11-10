
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Movie from "./Movie";

function PaginatedItems({ itemsPerPage, movies }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movies.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % movies.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    const movieOfCurrentPage = currentItems.map(item => {
      return <Movie key={item.id} movie={item} />
    })
    return (
      <>
      {movieOfCurrentPage}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="react-paginate"
        />
      </>
    );
  }

  export default PaginatedItems;