import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <p>Count: {count}</p>

      <button onClick={increment}>Push</button>
      {/* or we can write onClick{()=> setCount(count +1)} */}
      <button onClick={decrement}>Push</button>
    </>
  );
}

// function App() {
//   let count = 0;

//   function increment() {
//     count++;
//   }

//   return (
//     <>
//       <p>Count: {count}</p>//if we leave it like that it will always show '0'

//       <button onClick={increment}>Push</button>
//     </>
//   );
// }
