import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.log(`render counter ${counter}`);

  function handleClick() {
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    console.log(counter);
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Tambah</button>
      </div>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
