const PaginationComponent = ({ n, plusN, minusN, targetN }) => {
  return (
    <>
      {n > 6 && (
        <div>
          <button onClick={() => minusN(n)}>Prev</button>
          <button onClick={() => targetN(1)}>1</button>
          <button onClick={() => targetN(2)}>2</button>
          <button onClick={() => targetN(3)}>3</button>
          <button onClick={() => targetN(4)}>4</button>
        </div>
      )}

      {n < 6 && (
        <div>
          <button onClick={() => plusN(n)}>After</button>
          <button onClick={() => targetN(5)}>5</button>
          <button onClick={() => targetN(6)}>6</button>
          <button onClick={() => targetN(7)}>7</button>
          <button onClick={() => targetN(8)}>8</button>
          <button onClick={() => targetN(9)}>9</button>
          <button onClick={() => targetN(10)}>10</button>
        </div>
      )}
    </>
  );
};

export default PaginationComponent;
