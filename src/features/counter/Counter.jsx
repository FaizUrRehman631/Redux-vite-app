import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiply,
  reset,
  divide,
  decrementByAmount,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="mx-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="mx-2"
          aria-label="Decrement value"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(divide())}>
          Divide
        </button>
        <h1 className="my-2">{count}</h1>
        <h4>Functional counter using Redux toolkit store in vite app.</h4>
        <button
          className="mx-2"
          aria-label="reset value"
          onClick={() => dispatch(decrementByAmount(2000))}
        >
          DecrementByAmount
        </button>
        <button aria-label="reset value" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button
          className="mx-2"
          aria-label="reset value"
          onClick={() => dispatch(incrementByAmount(2000))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  );
}
