import React from "react";

function IncDecFunctional() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
      if(count > 0){
          setCount(count - 1);
      }
  };

  return (
    <div>
      <h1>Functional Counter: {count}</h1>
      <button class="btn btn-primary" onClick={increment}>Increment</button>
      <button class="btn btn-danger" onClick={decrement}>Decrement</button>
    </div>
  );
}
export default IncDecFunctional;