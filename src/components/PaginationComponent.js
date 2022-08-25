import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PaginationComponent = ({ plusN, numPage, setNumPage }) => {
  return (
    <>
      {numPage < 40 && (
        <div>
          <button onClick={() => setNumPage(11)}>1</button>
          <button onClick={() => setNumPage(21)}>2</button>
          <button onClick={() => setNumPage(31)}>3</button>
          <button onClick={() => setNumPage(41)}>4</button>
        </div>
      )}

      {numPage > 40 && (
        <div>
          <button onClick={() => setNumPage(51)}>5</button>
          <button onClick={() => setNumPage(61)}>6</button>
          <button onClick={() => setNumPage(71)}>7</button>
          <button onClick={() => setNumPage(81)}>8</button>
          <button onClick={() => setNumPage(91)}>9</button>
          <button onClick={() => setNumPage(101)}>10</button>
        </div>
      )}

      <button onClick={() => setNumPage(numPage - 10)}>Prev</button>
      <button onClick={() => setNumPage(numPage + 10)}>Next</button>

      <button onClick={() => plusN(numPage)}>Show All Posts</button>
    </>
  );
};

export default PaginationComponent;
