import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PaginationComponent = ({ plusN, numPage, setNumPage }) => {
  return (
    <>
      {numPage < 40 && (
        <div>
          <button className="button-pagination" onClick={() => setNumPage(11)}>
            1
          </button>
          <button className="button-pagination" onClick={() => setNumPage(21)}>
            2
          </button>
          <button className="button-pagination" onClick={() => setNumPage(31)}>
            3
          </button>
          <button className="button-pagination" onClick={() => setNumPage(41)}>
            4
          </button>
        </div>
      )}

      {numPage > 40 && (
        <div>
          <button className="button-pagination" onClick={() => setNumPage(51)}>
            5
          </button>
          <button className="button-pagination" onClick={() => setNumPage(61)}>
            6
          </button>
          <button className="button-pagination" onClick={() => setNumPage(71)}>
            7
          </button>
          <button className="button-pagination" onClick={() => setNumPage(81)}>
            8
          </button>
          <button className="button-pagination" onClick={() => setNumPage(91)}>
            9
          </button>
          <button className="button-pagination" onClick={() => setNumPage(101)}>
            10
          </button>
        </div>
      )}

      <button
        className="button-pagination"
        onClick={() => setNumPage(numPage - 10)}
      >
        Prev
      </button>
      <button
        className="button-pagination"
        onClick={() => setNumPage(numPage + 10)}
      >
        Next
      </button>

      <button className="button-pagination" onClick={() => plusN(numPage)}>
        Show All Posts
      </button>
    </>
  );
};

export default PaginationComponent;
