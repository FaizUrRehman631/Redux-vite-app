// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./features/counter/Counter.jsx";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux"; // To use state from Redux

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value); // If we don't use Redux then use useState.
  // And uncomment the useState and buttons and from import. otherwise leave it as it is.
  return (
    <>
      <Navbar />
      <Counter />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="mx-4">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          +
        </button> */}
        Count: {count}
        {/* <button onClick={() => setCount((count) => count - 1)}>
          -
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
