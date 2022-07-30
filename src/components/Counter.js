import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Double of count: {double}</p>
    </>
  );
};
export default Counter;
