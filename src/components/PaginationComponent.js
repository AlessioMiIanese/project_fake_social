import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PaginationComponent = ({
  n,
  plusN,
  minusN,
  targetN,
  numPage,
  changePageDown,
  changePageUp,
}) => {
  return (
    <>
      {n < 6 && (
        <div>
          <button onClick={() => targetN(1)}>1</button>
          <button onClick={() => targetN(2)}>2</button>
          <button onClick={() => targetN(3)}>3</button>
          <button onClick={() => targetN(4)}>4</button>
          <button onClick={() => plusN(numPage)}>Show All Posts</button>
        </div>
      )}

      {n > 6 && (
        <div>
          <button onClick={() => minusN(numPage)}>Prev</button>
          <button onClick={() => targetN(5)}>5</button>
          <button onClick={() => targetN(6)}>6</button>
          <button onClick={() => targetN(7)}>7</button>
          <button onClick={() => targetN(8)}>8</button>
          <button onClick={() => targetN(9)}>9</button>
          <button onClick={() => targetN(10)}>10</button>
        </div>
      )}

      <div>
        {numPage > 10 && (
          <button onClick={() => changePageDown()}>Show Less</button>
        )}
        {numPage < 100 && (
          <button onClick={() => changePageUp()}>Load More Posts</button>
        )}
      </div>
    </>
  );
};

export default PaginationComponent;
