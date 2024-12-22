import { useRef, useState } from "react";

export default function Timer() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  function handleStart() {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 15);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <h1>Timer : {now - start} ms</h1>
      <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button>
    </>
  );
}
